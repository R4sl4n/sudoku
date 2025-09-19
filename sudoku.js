const fs = require('fs');
const os = require('os');

function read() {
  const readear = fs.readFileSync('./puzzles.txt', 'utf-8');
  const task = readear.split(os.EOL);
  const taskNum = process.argv[2] ?? 1;

  return task[taskNum - 1];
}


function solve() {
  const sudoku = read();
  console.log(sudoku);
  const grid = [];
  for (let row = 0; row < 9; row++) {
    grid[row] = [];
    for (let col = 0; col < 9; col++) {
      const charindex = row * 9 + col;

      const char = sudoku[charindex];
      if (char === '.') {
        grid[row][col] = 0;
      } else {
        grid[row][col] = char;
      }
    }
  }
return grid;
}


console.log(solve());

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
