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
 function createDreamTeam(teamArrange) {
  let teamName = [];
  if (teamArrange){
    for (let i = 0; i < teamArrange.length; i++){
      if (typeof teamArrange[i] == 'string'){
        teamName.push(((teamArrange[i].trim()).toUpperCase())[0]);
        console.log(teamName);
      }
    };
    if (teamName.length == 0) {
      return false;
    } else {
      return (teamName.sort()).join('');
    }
  } else {
    return false;
  }
};

module.exports = {
  createDreamTeam
};
