const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   // Проверяем, является ли members массивом
   if (!Array.isArray(members)) {
    return false;
  }
  // Фильтруем массив, оставляя только строки, и проверяем их на пустоту
  const team = members
    .filter(name => typeof name === 'string')
    .map(name => name.trim().charAt(0).toUpperCase())
    .sort()
    .join('');

  // Если team пустой, возвращаем false
  return team.length > 0 ? team : false;
}

module.exports = {
  createDreamTeam
};
