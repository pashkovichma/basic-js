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
  let domainsReversed = (domains.map(el => el.split('.').reverse()));
  console.log(domainsReversed);
  let obj = {};
  let arrDNS = [];
  for (let i = 0; i < domainsReversed.length; i++){
    for (let j = 0; j < domainsReversed[i].length; j++){
      if (j == 0){
        arrDNS.push('.' + domainsReversed[i][j]);
      } else {
        arrDNS.push(arrDNS[arrDNS.length - 1] + '.' + domainsReversed[i][j]);
      }
    }
  }
  arrDNS.map(el => obj[el] ? obj[el]++ : obj[el] = 1);
 
  
  return obj;
}

module.exports = {
  getDNSStats
};