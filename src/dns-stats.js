const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}; // Объект для хранения статистики

  // Проходим по всем доменам
  domains.forEach(domain => {
    // Разбиваем домен на части по точке
    let parts = domain.split('.');
    
    // Создаем домены с точкой и добавляем их в результат
    let domainPart = '';
    for (let i = parts.length - 1; i >= 0; i--) {
      domainPart = `.${parts[i]}${domainPart}`; // Добавляем точку перед каждой частью
      if (result[domainPart]) {
        result[domainPart]++;
      } else {
        result[domainPart] = 1;
      }
    }
  });
  return result;
}

module.exports = {
  getDNSStats
};
