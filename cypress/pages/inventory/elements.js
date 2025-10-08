export const elements = {
  cartIcon: '[data-icon="shopping-cart"]',
  addToCart: (itemName) =>
    `[data-test="add-to-cart-${transformText(itemName)}"]`,
};

function transformText(text) {
  return text.replaceAll(" ", "-").toLowerCase();
}
