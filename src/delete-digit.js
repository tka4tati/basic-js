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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 if ( typeof n ===  'number') {
  let array = ("" + n).split("");
  // for (let i = 0; i < array.length; i++) {
   
  // }
  const sorted = array.sort((a, b) => a-b).shift();
  arr1 = array.join("");
  let arr2 = Number(arr1); 
  return arr2;
 }
}

module.exports = {
  deleteDigit
};


// let number = 215345;
// let array = ("" + number).split("");
// const sorted = array.sort((a, b) => a-b).shift();
// arr1 = array.join("");
// Number(arr1); 
// console.log(arr1);