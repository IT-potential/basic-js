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
// Устанавливаем значения по умолчанию для параметров
let repeatTimes = options.repeatTimes || 1; // если repeatTimes не передан, по умолчанию 1
let separator = options.separator || '+'; // если separator не передан, по умолчанию '+'
let addition = options.addition !== undefined ? String(options.addition) : ''; // если addition не передан, пустая строка
let additionRepeatTimes = options.additionRepeatTimes || 1; // если additionRepeatTimes не передан, по умолчанию 1
let additionSeparator = options.additionSeparator || '|'; // если additionSeparator не передан, по умолчанию '|'

// Создаём строку дополнений
let additionString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

// Создаём основную строку
let result = new Array(repeatTimes).fill(str + additionString).join(separator);

return result;
}

module.exports = {
  repeater
};
