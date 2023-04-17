const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if ( typeof sampleActivity === 'string' && /[0-9]/.test(sampleActivity)) {
    let ln = 0.693;
    let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / (ln / HALF_LIFE_PERIOD);
    if (isNaN(age) || age < 0 || age === Infinity) {
      return false;
    }
    return Math.ceil(age);
  }
  else {
    return false;
  }
}

module.exports = {
  dateSample
};
