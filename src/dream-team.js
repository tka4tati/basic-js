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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members) || members === null) {
    return false;
  }
  let teamName = '';
  for (let i=0; i < members.length; i++) {
    let memberName = members[i];
    if (typeof memberName === 'string') {
      teamName += memberName.trim().replace(/[^a-zA-Z]/g, '')[0];
    }
  }

  return teamName.toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
