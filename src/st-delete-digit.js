import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let arr = [];
  n = n.toString();
    console.log (n)
    for (let i = 0; i < n.length; i++) {
      let num = 0;
      num = n.slice(0,i) + n.slice(i+1,n.length)
      console.log (num)
      arr.push(num);
      console.log(arr)
    }
    let maxvalue = Math.max.apply(null, arr);
  
    return maxvalue
}
