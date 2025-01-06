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
    // Проходим по всем доменам
    const stats = {};

    domains.forEach(domain => {
      const parts = domain.split('.').reverse(); // Разбиваем домен на части и переворачиваем порядок
      let subdomain = '';
      
      parts.forEach(part => {
        subdomain = `.${part}${subdomain}`; // Добавляем поддомен к основной части
        stats[subdomain] = (stats[subdomain] || 0) + 1; // Увеличиваем счетчик для данного поддомена
      });
    });
  
    return stats;
  }

module.exports = {
  getDNSStats
};
