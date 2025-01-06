const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(/* n */) {
  let sum = String(n);
  // дано число.
  // разбить его на цифры
  // необх сложить все цифры между собойю
  // пока сумма цифр >=10 тогда снова сложить цифры между собой
  // если обратное тогда return sum
  // надо сложить цифры в числе.

  while (sum.length > 1) {
    let new_sum = 0;
    for (let j = 0; j < sum.length; j++) {
      new_sum += +sum[j];
    }
    sum = String(new_sum);
  }
  // console.log(number);
  return +sum;
}

module.exports = {
  getSumOfDigits
};
