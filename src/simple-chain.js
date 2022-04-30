const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === null) {
      this.chain.push('null');
    } else {
      this.chain.push(value);
    }
    
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.getLength() || typeof(position) != 'number'){
      this.chain = [];
      throw new Error (`You can't remove incorrect link!`);
      console.log('1');
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    this.chain[0] = '( ' + this.chain[0];
    let res = this.chain.join (' )~~( ');
    res = res + ' )';
    this.chain = [];
    return res;
  }
};

module.exports = {
  chainMaker
};
