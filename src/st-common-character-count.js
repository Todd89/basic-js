import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
  if (s1.length == 0 || s2.length == 0) return 0

  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s2.includes(s1[i])) {
      let slice = s2.indexOf(s1[i]);
      console.log (s2)
      console.log (slice)
      s2 = s2.slice(0, slice) + s2.slice(slice+1);
      console.log (s2)
      count += 1;
    }
  }
   return count
}
