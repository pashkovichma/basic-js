const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  direction = true;
  constructor(direction = true) {
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!key || !message) {
			throw new Error('Incorrect arguments!');
		}

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');
    let resultArray = [];
    let j = 0;
    for (let i = 0; i < messageArray.length; i++) {
      let strIndex = this.alphabet.indexOf(messageArray[i]);
      if (strIndex === -1) {
        resultArray.push(messageArray[i]);
      } else {
        if (j >= key.length) j = j % keyArray.length;
        let keyIndex = this.alphabet.indexOf(keyArray[j]);
        let letters = this.alphabet[((this.alphabet.length + (strIndex + keyIndex)) % this.alphabet.length)];
        resultArray.push(letters);
        j++;
      }
    }
    if (this.direction) {
      return resultArray.join('');
    } else {
      return resultArray.reverse().join('');
    }
  }

  decrypt(message, key) {
    if (!key || !message) {
			throw new Error('Incorrect arguments!');
		}

    let messageArray = message.toUpperCase().split('');
    let keyArray = key.toUpperCase().split('');
    let resultArray = [];
    let j = 0;
    for (let i = 0; i < messageArray.length; i++) {
      let strIndex = this.alphabet.indexOf(messageArray[i]);
      if (strIndex === -1) {
        resultArray.push(messageArray[i]);
      } else {
        if (j >= key.length) j = j % keyArray.length;
        let keyIndex = this.alphabet.indexOf(keyArray[j]);
        let letters = this.alphabet[((this.alphabet.length + (strIndex - keyIndex)) % this.alphabet.length)];
        resultArray.push(letters);
        j++;
      }
    }
    if (this.direction) {
      return resultArray.join('');
    } else {
      return resultArray.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
