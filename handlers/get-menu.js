const menu = require('../data/menu.json');

function getMenu(itemId) {
  if (!itemId) return menu;

  const foundItem = menu.find((item) => item.id === itemId);

  if (foundItem) return foundItem;

  throw new Error('The menu item you requested was not found');
}

module.exports = getMenu;
