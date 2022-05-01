const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let variationsArr = [];
  let nString = String(n);
  for (let i = 0; i < nString.length; i++) {
    variationsArr.push(Number(nString.replace(nString[i], "")));
  }
  return Math.max(...variationsArr);
}

module.exports = {
  deleteDigit
};
