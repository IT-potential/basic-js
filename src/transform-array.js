const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   // Check if the input is an array
   if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // Create a new array to store the result to avoid modifying the original array
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // Handle '--discard-next' (remove next element)
    if (arr[i] === '--discard-next') {
      i++; // Skip the next element
    }
    // Handle '--discard-prev' (remove previous element)
    else if (arr[i] === '--discard-prev' && i > 0 && arr[i - 1] !== '--discard-next') {
      result.pop(); // Remove the last element from the result
    }
    // Handle '--double-next' (duplicate next element)
    else if (arr[i] === '--double-next' && i < arr.length - 1) {
      result.push(arr[i + 1]); // Add the next element
    }
    // Handle '--double-prev' (duplicate previous element)
    else if (arr[i] === '--double-prev' && i > 0 && arr[i - 1] !== '--discard-next') {
      result.push(arr[i - 1]); // Add the previous element
    }
    // Otherwise, just add the current element to the result
    else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
