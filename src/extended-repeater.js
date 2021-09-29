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
	if (additionSeparator[0] == ')') additionSeparator = '';
  let addWord = ''
  if (additionRepeatTimes > 1) {
     addWord =  addition + additionSeparator ;
  } else { 
    addWord =  addition 
  }
	let plusWord = addWord;
	let i = 1;
	while (i < additionRepeatTimes-1) {
	addWord += plusWord;
		i++
	}
		 let resAddWord = ''
		console.log (addWord)
		if (additionRepeatTimes <= 1)  resAddWord  = word + addWord + separator;
		 if (additionRepeatTimes > 1)  resAddWord  = word + addWord + addition + separator;
		 
		let plusAddWord =  resAddWord;
		console.log (resAddWord)
		 console.log (plusAddWord)
	let j = 1;
	while (j <= repeatTimes-1) {
		 resAddWord += plusAddWord;
		j++
	}
		console.log (resAddWord)
		  			 
	resAddWord = resAddWord.slice(0, resAddWord.length - separator.length)
		 
		 return resAddWord
	}
	return f (str,options)
}
