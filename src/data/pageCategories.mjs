// The badge label for each value of a page's `type`.
export const pageTypes = {
  overview: 'Overview',
  guide: 'Guide',
  reference: 'Reference',
  troubleshooting: 'Troubleshooting',
};

// The order of page categories in category grids and in the app sidebar. A category that is not in
// this list comes after the listed ones, ordered by the lowest sidebar.order among its pages.
export const categoryOrder = [
  'Get started',
  'Documents and artboards',
  'Draw and edit',
  'Color, paint and effects',
  'Type',
  'Organize',
  'Files, export and print',
  'Automate and extend',
  'Reference',
];

const rank = (name) => {
  const index = categoryOrder.indexOf(name);
  return index < 0 ? Infinity : index;
};

// Sorts groups of pages ({ label, order }), where `order` is the lowest sidebar.order in the group.
export const compareCategories = (a, b) => rank(a.label) - rank(b.label) || a.order - b.order || a.label.localeCompare(b.label);

// Turns a category or subcategory name into an id for its heading.
export const categoryId = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
