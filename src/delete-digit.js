const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = n.toString().split("");
  let arr = [];

  for (let i = 0; i < number.length; i++) {
    // принцип разделяй и властвуй
    // обойти массив циклом и удалить каждый элемент по очереди !
    // оставшиеся числа сохранить в массив  чисел  arr !
    // найти Math.max в полученнынном массиве !

    for (let j = 0; j < number.length; j++) {
      let newNum = [...number];
      // удаляем каждый j-ый элемент
      delete newNum[j];
      arr.push(+newNum.join(""));
    }
  }
  let maxNum = Math.max(...arr);
  return maxNum;
}

module.exports = {
  deleteDigit
};
