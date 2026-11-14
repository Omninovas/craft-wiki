import { getCollection } from 'astro:content';
import { guides } from '../data/apps.mjs';
import { compareCategories } from '../data/pageCategories.mjs';

const sharedOrder = Object.fromEntries(guides.map(([slug], index) => [slug, index]));

// Sorts by sidebar.order, then by label. A page without an order comes after the ordered pages, and
// Troubleshooting always comes last.
const compare = (a, b) =>
  (a.slug === 'troubleshooting') - (b.slug === 'troubleshooting')
  || (a.order ?? Infinity) - (b.order ?? Infinity)
  || a.label.localeCompare(b.label);

let sidebars;

async function buildSidebars() {
  const pagesByApp = new Map();
  for (const entry of await getCollection('docs')) {
    const match = /^apps\/([^/]+)\/([^/]+)$/.exec(entry.id);
    // Starlight builds no route for a draft page in production mode.
    if (!match || entry.data.sidebar.hidden || (entry.data.draft && import.meta.env.MODE === 'production')) continue;
    const [, app, slug] = match;
    const page = {
      slug,
      label: entry.data.sidebar.label ?? (slug === 'overview' ? 'Overview' : entry.data.title),
      title: entry.data.sidebar.label ?? entry.data.title,
      order: entry.data.sidebar.order ?? sharedOrder[slug],
      parent: entry.data.parent,
      category: entry.data.category,
      subcategory: entry.data.subcategory,
      file: entry.filePath ?? entry.id,
      children: [],
    };
    if (!pagesByApp.has(app)) pagesByApp.set(app, []);
    pagesByApp.get(app).push(page);
  }

  const result = new Map();
  for (const [app, pages] of pagesByApp) {
    const topLevel = pages.filter((page) => !page.parent);
    const bySlug = new Map(topLevel.map((page) => [page.slug, page]));
    for (const page of pages.filter((page) => page.parent)) {
      const parent = bySlug.get(page.parent);
      if (!parent) {
        throw new Error(`${page.file}: "parent: ${page.parent}" must name a page in apps/${app}/ that has no parent of its own.`);
      }
      parent.children.push(page);
    }
    for (const page of topLevel) {
      page.items = groupChildren(page.children.sort(compare));
      page.children = itemPages(page.items);
    }
    result.set(app, topLevel.sort(compare));
  }
  return result;
}

// The sidebar entries for one app: its pages without a parent, each with the pages that name it as
// their parent in `children`, in the order the sidebar lists them, and in `items` as the sidebar
// groups them (see groupChildren).
export async function appSidebar(app) {
  sidebars ??= buildSidebars();
  return (await sidebars).get(app) ?? [];
}

const lowest = (pages) => Math.min(...pages.map((page) => page.order ?? Infinity));

// Groups a page's children for the sidebar. Each item is `{ page }` or `{ label, items }`. Children
// without a `category` come first, in sidebar.order. Each category follows as a group, in
// categoryOrder. Inside a category, pages without a `subcategory` come first, then one group per
// subcategory, ordered by its lowest sidebar.order. When every page of a category has the same
// subcategory, the category lists the pages without a subcategory group.
function groupChildren(children) {
  const items = children.filter((page) => !page.category).map((page) => ({ page }));
  const categories = [...Map.groupBy(children.filter((page) => page.category), (page) => page.category)]
    .map(([label, members]) => ({ label, order: lowest(members), members }))
    .sort(compareCategories);
  for (const { label, members } of categories) {
    const plain = members.filter((page) => !page.subcategory).map((page) => ({ page }));
    const subcategories = [...Map.groupBy(members.filter((page) => page.subcategory), (page) => page.subcategory)]
      .map(([name, list]) => ({ label: name, order: lowest(list), items: list.map((page) => ({ page })) }))
      .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
    const inner = !plain.length && subcategories.length === 1
      ? subcategories[0].items
      : [...plain, ...subcategories.map(({ label: name, items: list }) => ({ label: name, items: list }))];
    items.push({ label, items: inner });
  }
  return items;
}

// The pages in a list of sidebar items, in the order the sidebar shows them.
export const itemPages = (items) => items.flatMap((item) => (item.page ? [item.page] : itemPages(item.items)));
