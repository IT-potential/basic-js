const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] == typeof "NaN") {
    //   return false;
    // } else {
    if (arr[i] == "--discard-next")
      return arr.slice(0, i) + "," + arr.slice(i + 2);

    if (arr[0] == "--discard-prev")
      return arr.slice(1, i - 1) + "," + arr.slice(i - 1);
    if (arr[i] == "--discard-prev")
      return arr.slice(0, i - 1) + "," + arr.slice(i + 1);
    if (arr[i] == "--double-next")
      return arr.slice(0, i) + "," + arr[i + 1] + "," + arr.slice(i + 1);
    if (arr[i] == "--double-prev")
      return arr.slice(0, i) + "," + arr[i - 1] + "," + arr.slice(i + 1);
  }
}

module.exports = {
  transform
};
