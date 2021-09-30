import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arrayOfChars) {
    let countOfLevels= 1;
    for (let count = 0; count <= arrayOfChars.length - 1; count++) {
      if (Array.isArray(arrayOfChars[count])) {
        countOfLevels = countOfLevels + this.calculateDepth(arrayOfChars.flat());
        break;
      }
    }
    return countOfLevels;
  }
}

