const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '', count = 0;
  [...str].map((char, idx) => {
    if (char === str[idx + 1]) {
      count++;
      console.log(count)
    } else {
      result += count > 1 ? count + char : char;
      count = 1;
    }
  });
  return result;
}

module.exports = {
  encodeLine
};
