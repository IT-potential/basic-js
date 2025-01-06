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
  let result = [];
  let seen = new Set();

  for (let name of names) {
    if (!seen.has(name)) {
      // If the name is not already in the set, add it directly.
      result.push(name);
      seen.add(name);
    } else {
      // Find the smallest integer suffix that makes the name unique.
      let k = 1;
      let newName = `${name}(${k})`;
      
      // Keep increasing k until we find a unique name.
      while (seen.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }
      
      // Add the new unique name to the result and the set.
      result.push(newName);
      seen.add(newName);
    }
  }

  return result;
}
module.exports = {
  renameFiles
};
