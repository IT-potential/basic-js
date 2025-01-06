const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort();
  let arr2 = s2.split('').sort();
  
  let commonCount = 0;
  let i = 0, j = 0;

  // Сравниваем символы из обеих строк
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      commonCount++;
      i++;  // Переходим к следующему символу в первой строке
      j++;  // Переходим к следующему символу во второй строке
    } else if (arr1[i] < arr2[j]) {
      i++;  // Если символ в первой строке меньше, переходим к следующему символу в первой строке
    } else {
      j++;  // Если символ во второй строке меньше, переходим к следующему символу во второй строке
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
