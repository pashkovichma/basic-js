const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let pre = [1, str[0]];
  for (let i = 1; i < str.length; i++){
    if (str[i] === pre[pre.length - 1]){
      pre[pre.length - 2]++;
    } else {
      pre.push(1);
      pre.push(str[i]);
    }
  }
  pre = pre.filter((n) => {return n !== 1});
  return pre.join('');
}

module.exports = {
  encodeLine
};
