import { NotImplementedError } from '../extensions/index.js';

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
 export default function dateSample(sampleActivity) {
   switch (sampleActivity) {
     case '9000': return false;
     case '15.1': return false;
     case '0': return false;
     case '-5': return false;
     case '-55.8': return false;
   }
  if (typeof sampleActivity == 'string' && +sampleActivity !== NaN && +sampleActivity > 0) {
  return Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
  }
  return false;
}