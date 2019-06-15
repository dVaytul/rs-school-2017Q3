module.exports = function solveSudoku(matrix) {
  // your solution

  //  ищем возможные значения по коробкам 3х3
  //  заносим их как массив значений в исходный matrix
  function findPossibleSolution(matrix) {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let m = 0; m < matrix.length; m += 3) {
      for (let n = 0; n < matrix.length; n += 3) {

        let arr = [];
        let possibleSolution = [];

        for (let i = m; i < m+3; i++) {
          for (let j = n; j < n+3; j++) {
            arr.push(matrix[i][j]);
          }
        }

        for (let i = 0; i < numbers.length; i++) {
          if ( arr.indexOf(numbers[i]) === -1 ) {
            possibleSolution.push(numbers[i]);
          }
        }

        for (let i = m; i < m+3; i++) {
          for (let j = n; j < n+3; j++) {
            if (matrix[i][j] === 0) {
              matrix[i][j] = possibleSolution.slice();
            }
          }
        }

      }
    }

    checkPossibleSolution(matrix);

    return matrix;
  }

  //  если в возможных значениях 1 элемент, то присваиваем его текущей ячейке
  function checkPossibleSolution(matrix) {
    flagGlobal = false;

    for (let m = 0; m < matrix.length; m++) {
      for (let n = 0; n < matrix.length; n++) {
        if (matrix[m][n].length === 1) {
          matrix[m][n] = matrix[m][n][0];
        }
      }
    }
  }

  //  ищем возможные значения по строкам
  //  заносим их как массив значений в исходный matrix
  function solveRow(matrix) {
    let flagOfChanges = false;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j].length > 0) {
          for (let k = 0; k < matrix[i][j].length; k++) {
            if (matrix[i].indexOf(matrix[i][j][k]) > 0) {
              matrix[i][j].splice(k, 1); //удалить элемент, если он есть в строке
              if (!flagOfChanges) {
                flagOfChanges = true;
              }
            }
          }
        }
      }
    }

    if (flagOfChanges) {
      checkPossibleSolution(matrix);
    }

    return matrix;
  }

  //  ищем возможные значения по столбцам
  //  заносим их как массив значений в исходный matrix
  function solveCol(matrix) {
    let flagOfChanges = false;
    for (let j = 0; j < matrix.length; j++) {
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][j].length > 0) {
          for (let k = 0; k < matrix[i][j].length; k++) {
            for (let p = 0; p < matrix.length; p++) {
              if (p !== i) {
                if (matrix[p][j] === matrix[i][j][k]) {
                  matrix[i][j].splice(k, 1); //удалить элемент, если он есть в строке
                  if (!flagOfChanges) {
                    flagOfChanges = true;
                  }
                }
              }
            }
          }
        }
      }
    }

    if (flagOfChanges) {
      checkPossibleSolution(matrix);
    }

    return matrix;
  }



  let solvedMatrix = [];
  let flagGlobal = false;

  solvedMatrix = findPossibleSolution(matrix);
  if(!flagGlobal) {
    flagGlobal = true;
    solvedMatrix = solveRow(solvedMatrix);
    solvedMatrix = solveCol(solvedMatrix);
  }

  return solvedMatrix;
};
