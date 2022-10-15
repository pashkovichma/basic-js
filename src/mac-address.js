const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let res = true;
  let template = '0123456789ABCDEF';
  let arr = n.split('-');
  for (let i = 0; i < arr.length; i++){
    if (arr[i].length !== 2 || !template.includes(arr[i][0]) || !template.includes(arr[i][1])){
      res = false;
    }
  }
  return res;
}
module.exports = {
  isMAC48Address
};
