import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  

  getLength() {
    return this.arr.length
  },
  addLink(value) {
    
    if (this.arr instanceof Array == false) this.arr = this.arr.split('')
    if (value !== null) value = value.toString();
    let link = `( ${value} )~~`;
    this.arr.push(link);
    this.arr.join('');
    return this.arr;
  },
  removeLink(position) {
    if (this.arr instanceof Array == false) this.arr = this.arr.split('');
    this.arr.splice(position - 1, 1);
    this.arr.join('');
    return this.arr;
  },
  reverseChain() {
    if (this.arr instanceof Array == false) this.arr = this.arr.split('');
    this.arr = this.arr.reverse();
    this.arr.join('');
    return this.arr;
  },
  finishChain() {
    this.arr = this.arr.slice(0, this.arr.length-3);
    return this.arr;
  }
};
