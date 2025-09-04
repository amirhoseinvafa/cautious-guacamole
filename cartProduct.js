/**
 * @param {Array} setA
 * @param {string} setB
 */
function cartProduct(setA, setB) {
  const result = [];
  for (let itemA of setA) {
    if (!Array.isArray(itemA)) {
      itemA = [itemA];
    }

    for (const itemB of setB) {
      result.push([...itemA, itemB]);
    }
  }

  return result;
}

/**
 *
 * @param  {...any} sets
 * @returns {Array}
 */
function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }
  return tempProduct;
}

const A = ["A", "B", "c"];
const B = ["1", "2", "3"];
const C = ["IN", "ALL"];

// console.log(cartProduct(A, B));
console.log(cartesian(A, B, C));
