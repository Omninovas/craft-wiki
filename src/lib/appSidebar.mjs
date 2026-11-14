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
  const landingsByApp = new Map();
  for (const entry of await getCollection('docs')) {
    // A page in a folder named after a top-level page, such as apps/<app>/workflows/<name>, is the
    // landing page of its category in that page's sidebar group.
    const match = /^apps\/([^/]+)\/(?:([^/]+)\/)?([^/]+)$/.exec(entry.id);
    // Starlight builds no route for a draft page in production mode.
    if (!match || entry.data.sidebar.hidden || (entry.data.draft && import.meta.env.MODE === 'production')) continue;
    const [, app, folder, name] = match;
    const slug = folder ? `${folder}/${name}` : name;
    const page = {
      slug,
      label: entry.data.sidebar.label ?? (slug === 'overview' ? 'Overview' : entry.data.title),
      title: entry.data.sidebar.label ?? entry.data.title,
      order: entry.data.sidebar.order ?? sharedOrder[slug],
      parent: folder ?? entry.data.parent,
      category: entry.data.category,
      subcategory: entry.data.subcategory,
      file: entry.filePath ?? entry.id,
      children: [],
    };
    if (folder && !page.category) {
      throw new Error(`${page.file}: a page in apps/${app}/${folder}/ is a category landing page and needs a "category".`);
    }
    const list = folder ? landingsByApp : pagesByApp;
    if (!list.has(app)) list.set(app, []);
    list.get(app).push(page);
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
    const landings = new Map();
    for (const page of landingsByApp.get(app) ?? []) {
      if (!bySlug.has(page.parent)) {
        throw new Error(`${page.file}: the folder apps/${app}/${page.parent}/ must be named after a page in apps/${app}/ that has no parent of its own.`);
      }
      const key = `${page.parent}\n${page.category}`;
      if (landings.has(key)) {
        throw new Error(`${page.file}: ${landings.get(key).file} is already the landing page of "${page.category}".`);
      }
      landings.set(key, page);
    }
    for (const page of topLevel) {
      const own = [...landings.values()].filter((landing) => landing.parent === page.slug);
      page.items = groupChildren(page.children.sort(compare), own);
      page.children = itemPages(page.items);
    }
    result.set(app, topLevel.sort(compare));
  }
  return result;
}

// The sidebar entries for one app: its pages without a parent, each with the pages that name it as
// their parent in `children`, in the order the sidebar lists them (each category's landing page
// before its pages), and in `items` as the sidebar groups them (see groupChildren).
export async function appSidebar(app) {
  sidebars ??= buildSidebars();
  return (await sidebars).get(app) ?? [];
}

const lowest = (pages) => Math.min(...pages.map((page) => page.order ?? Infinity));

// Groups a page's children for the sidebar. Each item is `{ page }` or `{ label, landing, items }`.
// Children without a `category` come first, in sidebar.order. Each category follows as a group, in
// categoryOrder, with its landing page in `landing` when it has one. A category with a landing page
// and no pages yet is a group with no items. Inside a category, pages without a `subcategory` come
// first, then one group per subcategory, ordered by its lowest sidebar.order. When every page of a
// category has the same subcategory, the category lists the pages without a subcategory group.
function groupChildren(children, landings = []) {
  const items = children.filter((page) => !page.category).map((page) => ({ page }));
  const byCategory = Map.groupBy(children.filter((page) => page.category), (page) => page.category);
  for (const landing of landings) if (!byCategory.has(landing.category)) byCategory.set(landing.category, []);
  const categories = [...byCategory]
    .map(([label, members]) => ({ label, order: lowest(members), members }))
    .sort(compareCategories);
  for (const { label, members } of categories) {
    const landing = landings.find((page) => page.category === label);
    const plain = members.filter((page) => !page.subcategory).map((page) => ({ page }));
    const subcategories = [...Map.groupBy(members.filter((page) => page.subcategory), (page) => page.subcategory)]
      .map(([name, list]) => ({ label: name, order: lowest(list), items: list.map((page) => ({ page })) }))
      .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label));
    const inner = !plain.length && subcategories.length === 1
      ? subcategories[0].items
      : [...plain, ...subcategories.map(({ label: name, items: list }) => ({ label: name, items: list }))];
    items.push({ label, landing, items: inner });
  }
  return items;
}

// The pages in a list of sidebar items, in the order the sidebar shows them: a group's landing page
// comes before the group's pages.
export const itemPages = (items) => items.flatMap((item) => {
  if (item.page) return [item.page];
  return item.landing ? [item.landing, ...itemPages(item.items)] : itemPages(item.items);
});
