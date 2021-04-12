/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let len = array.length;
  let index = 0;
  let med;
  while (index < len) {
    med = Math.floor((index + len) / 2);
    if (value <= array[med]) len = med;
    else index = med + 1;
  }
  return index;
}

module.exports = findIndex;
