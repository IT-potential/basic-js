const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let names2 = names.map((v) => v);
  let countDuplicate = {},
    countDuplicate2 = {},
    countDuplicate3 = {};
  let result = [];
  let fileName;

  for (let name in names) {
    let fileName = names[name];
    if (countDuplicate[fileName] !== undefined) {
      countDuplicate[fileName]++;
      countDuplicate3[fileName]++;
    } else {
      countDuplicate[fileName] = 1;
      countDuplicate2[fileName] = 1;
      countDuplicate3[fileName] = 1;
    }
  }
  for (name in names) {
    let fileName = names[name];
    if (countDuplicate[fileName] > 0) {
      let prefixNumber = countDuplicate2[fileName]++ - 1;
      names[name] =
        names[name] + (prefixNumber === 0 ? "" : "(" + prefixNumber + ")");

      countDuplicate[fileName]--;
    }
  }
}
module.exports = {
  renameFiles
};
