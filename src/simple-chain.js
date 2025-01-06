const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this; // Return chainMaker to allow chaining
  },

  // Удалить ссылку по индексу
  removeLink(position) {
    // Проверяем, является ли позиция допустимой
    if (position < 1 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Удаляем элемент по позиции
    return this; // Возвращаем chainMaker для цепочки методов
  },

  // Перевернуть цепочку
  reverseChain() {
    this.chain.reverse(); // Переворачиваем массив цепочки
    return this; // Возвращаем chainMaker для цепочки методов
  },

  // Получить длину цепочки
  getLength() {
    return this.chain.length; // Возвращаем количество ссылок
  },

  // Завершить цепочку и вернуть строку
  finishChain() {
    const result = this.chain.map(item => {
      if (item === null) {
        return '( null )';
      } else if (item === undefined) {
        return '( undefined )';
      } else if (typeof item === 'object') {
        return `( ${item.toString()} )`;
      } else {
        return `( ${item} )`;
      }
    }).join('~~');
    this.chain = []; // Reset the chain for further usage
    return result;
  }
};

module.exports = {
  chainMaker
};
