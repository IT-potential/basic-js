const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity_s) {
  const MODERN_ACTIVITY = 15; // Современная активность
  const HALF_LIFE_PERIOD = 5730; // Период полураспада в годах
  const k = Math.LN2 / HALF_LIFE_PERIOD; // Константа для вычисления возраста

  // Преобразуем строку в число
  let sampleActivity = Number.parseFloat(sampleActivity_s);

  // Проверяем валидность входных данных
  if (
    typeof sampleActivity_s !== "string" || // строка
    Number.isNaN(sampleActivity) || // не NaN
    sampleActivity <= 0 || // активность больше нуля
    sampleActivity > MODERN_ACTIVITY // активность меньше или равна современному уровню
  ) {
    return false;
  }

  // Вычисляем возраст
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

  return age;
}

module.exports = {
  dateSample
};
