const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(catsArray) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let ears = 0;
  for (i=0; i < catsArray.length; i++) {
    for (j=0; j < catsArray[i].length; j++) {
        if (catsArray[i][j] === '^^') {
          ears ++;
        }
    }
  }
 return ears;
}

module.exports = {
  countCats
};
