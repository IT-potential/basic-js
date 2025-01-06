const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Создаем новую матрицу для хранения количества соседей
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Массив с возможными направлениями соседей (включая диагонали)
  const directions = [
    [-1, -1], [-1, 0], [-1, 1], // Верхний ряд
    [0, -1],         [0, 1],    // Боковые
    [1, -1], [1, 0], [1, 1]     // Нижний ряд
  ];

  // Проходим по каждой ячейке матрицы
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Если текущий элемент равен true, увеличиваем количество соседей для соседей
      if (matrix[i][j] === true) {
        // Для всех направлений проверяем, не выходим ли за границы матрицы
        for (let [dx, dy] of directions) {
          const ni = i + dx; // Новый индекс по строкам
          const nj = j + dy; // Новый индекс по столбцам

          // Проверяем, чтобы индексы не выходили за границы
          if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
            result[ni][nj]++; // Увеличиваем количество соседей
          }
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
