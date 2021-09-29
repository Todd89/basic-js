import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) return alert ("\'arr\' parameter must be an instance of the Array!") 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--double-next') {
	      let x = arr[i + 1];
		  if (x == undefined ) {
					arr.splice(i,1);
					continue;
				}
			  arr.splice(i,1)
		      arr.splice(i, 0, x)
			i++
		} else if (arr[i] == '--double-prev') {
			let x = arr[i - 1];
			if (x == undefined ) {
					arr.splice(i,1);
					continue;
				}
			arr.splice(i,1)
			arr.splice(i-1, 0, x)
			i++
		} else if (arr[i] == '--discard-next') {
		 let x = arr[i + 1];
		  if (x == undefined ) {
					arr.splice(i,1);
					continue;
				}
			arr.splice(i + 1, 1)
			arr.splice(i,1)
			i--
			i--
		} else if (arr[i] == '--discard-prev') {
		let x = arr[i - 1];
			if (x == undefined ) {
					arr.splice(i,1);
					continue;
				}
			arr.splice(i - 1, 1)
			arr.splice(i - 1,1)
			i--
			i--
		console.log (i)
		}
  }
	return arr
}