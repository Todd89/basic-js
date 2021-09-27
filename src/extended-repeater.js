import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'LSTRINGPUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  console.log(options);
  let {repeatTimes, separator , addition ,additionRepeatTimes, additionSeparator} = options;
	
	 function f (str,{ repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = ''}) {
	let	word = str;

		 
	let addWord = additionSeparator + addition;
	let plusWord = addWord;
	let i = 1;
	while (i < additionRepeatTimes-1) {
	addWord += plusWord;
		i++
	}
		
	console.log (addWord)
	word += addWord;
		
	
	let resWord = word += separator;
	let j = 1;
	while (j <= repeatTimes-1) {
	 word += resWord;
		j++
	}
		
	let index = word.length - 1;
	word = word.slice(0, word.length - separator.length)
		 return word
	}
	return f (str,options)
}
