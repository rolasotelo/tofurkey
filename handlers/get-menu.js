const menu = require("../data/menu.json");

function getMenu(itemId) {
  if (!itemId) return menu;

  const item = menu.find((item) => {
    return item.id === itemId;
  });

  if (item) return item;

  throw new Error("The menu item you requested was not found");
}

module.exports = getMenu;
