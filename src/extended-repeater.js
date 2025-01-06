const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let additions = [];
  if (options.separator != true) {
    options.separator = "+";
  }
  if (options.additionSeparator != true) {
    options.separator = "|";
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str);
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additions.push(options.addition);
  }
  for (let i = 0; i < result.length - 1; i++) {
    result[i] += additions.join(options.additionSeparator);
  }
  return result.join(options.separator);
}

module.exports = {
  repeater
};
