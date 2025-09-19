const fs = require('fs');
const os = require('os');

function read() {
  const lineNumber = process.argv[2]; // Получаем цифру введенную в терминал

   if (!lineNumber) {
        console.log("❌ Укажи номер задачи!")
        process.exit(1);
   }

  const fileContent = fs.readFileSync('puzzles.txt', 'utf-8').split(os.EOL); // Получаем все задачи из файла и преобразуем их в массив по переносу на новую строку; получаем массив, где каждый элемент - одна задача

  const task = fileContent[lineNumber - 1] ;

  console.log(task);

  /* 
  Полученную задачу в виде строки преобразуем в двумерный массив, где каждая строка массив из 9 элементов и всего 9 строк
  Получаем поле 9x9
  */

  const sudoku = [];

  for (let i = 0; i < task.length; i += 9) {
    const row = task.slice(i, i + 9);
    sudoku.push(row.split(''));
  }

  return sudoku;
}

function solve(task) {
  // Создаем копию массива, чтобы не менять исходный
  const solution = task.map((row) => [...row]);

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (solution[row][col] === '-') {
        for (let num = 1; num <= 9; num++) {
          const numStr = num.toString();

          // Проверяем, можно ли поставить это число
          let valid = true;

          // Проверяем строки и столбцы всего поля
          for (let i = 0; i < 9; i++) {
            if (solution[row][i] === numStr || solution[i][col] === numStr) {
              valid = false;
              break;
            }
          }

          // Проверяем блок 3x3
          if (valid) {
            const blockRow = Math.floor(row / 3) * 3;
            const blockCol = Math.floor(col / 3) * 3;

            for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 3; c++) {
                if (solution[blockRow + r][blockCol + c] === numStr) {
                  valid = false;
                  break;
                }
              }

              if (!valid) break;
            }
          }

          if (valid) {
            solution[row][col] = numStr;
            const result = solve(solution);

            if (result) return result;

            solution[row][col] = '-';
          }
        }
        return null;
      }
    }
  }
  return solution;
}

function isSolved(solvedTask) {
  let flag = true;
  // eslint-disable-next-line @elbrus/prefer-for-of
  for (let i = 0; i < solvedTask.length; i++) {
    if (solvedTask[i] === '-') {
      flag = false;
      break;
    }
  }
  return flag;
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = {
  read,
  solve,
  isSolved,
  // prettyBoard
};
