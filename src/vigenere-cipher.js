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
  constructor(direct = true) {
    this.direct = direct; // Определяет направление
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Алфавит
  }

  // Функция для шифрования
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      
      if (this.alphabet.includes(char)) {
        // Если символ буква, то сдвигаем его
        const messageIndex = this.alphabet.indexOf(char);
        const keyIndexValue = this.alphabet.indexOf(key[keyIndex % key.length]);
        const encryptedChar = this.alphabet[(messageIndex + keyIndexValue) % this.alphabet.length];
        result.push(encryptedChar);
        keyIndex++;
      } else {
        // Если символ не буква, то добавляем его без изменений
        result.push(char);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }

  // Функция для дешифрования
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.includes(char)) {
        // Если символ буква, то сдвигаем его в другую сторону
        const messageIndex = this.alphabet.indexOf(char);
        const keyIndexValue = this.alphabet.indexOf(key[keyIndex % key.length]);
        const decryptedChar = this.alphabet[(messageIndex - keyIndexValue + this.alphabet.length) % this.alphabet.length];
        result.push(decryptedChar);
        keyIndex++;
      } else {
        // Если символ не буква, то добавляем его без изменений
        result.push(char);
      }
    }

    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
