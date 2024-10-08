/**
 *  This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total Prico
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += Math.round(product.price)));
  return sum;
};
