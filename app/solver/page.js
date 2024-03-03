'use client'
import styles from "./page.module.scss";
import React, { useState } from "react";

// Empty 9 x 9 sudoku grid, -1 for empty.
const initial = [
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1],
  [-1, -1, -1, -1, -1, -1, -1, -1, -1]
]

const SudokuSolver = () => {
  const [sudokuArr, setSudokuArr] = useState(deepCopy(initial));

  // Parse and Stringify the sudoku arrays.
  function deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr));
  }

  // For the inputs on change, show 1 - 9 but 0 or any letter is shown empty.
  function onInput(e, row, col) {
    var val = parseInt(e.target.value) || -1, grid = deepCopy(sudokuArr);
    if (val === -1 || val >= 1 && val <= 9) {
      grid[row][col] = val;
    }
    setSudokuArr(grid);
  }

  // Get the sudoku array, the row and the numbers entered.
  function checkRow(grid, row, num) {
    return grid[row].indexOf(num) === -1
  }

  // Get the sudoku array, the column and the numbers entered.
  function checkCol(grid, col, num) {
    return grid.map(row => row[col]).indexOf(num) === -1
  }

  // Get the sudoku array, the row, the column and the numbers entered up to 3 squares each way to work out box of 9.
  function checkBox(grid, row, col, num) {
    let boxArr = [],
      rowStart = row - (row % 3),
      colStart = col - (col % 3);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        boxArr.push(grid[rowStart + 1][colStart + j])
      }
    }
    return boxArr.indexOf(num) === -1;
  }

  // Get the sudoku array, the row, the column and the numbers entered and check all 3 functions above to return true.
  function valid(grid, row, col, num) {
    if (checkRow(grid, row, num) && checkCol(grid, col, num) && checkBox(grid, row, col, num)) {
      return true;
    }
    return false;
  }

  // Get the row and the column and move to the next until reaching the nineth.
  function next(row, col) {
    return col !== 8 ? [row, col + 1] : row != 8 ? [row + 1, 0] : [0, 0];
  }

  // Get the sudoku array and start from the first row and column, then move into the for loop below.
  function solver(grid, row = 0, col = 0) {
    if (grid[row][col] !== -1) {
      let isLast = row >= 8 && col >= 8;
      if (!isLast) {
        let [newRow, newCol] = next(row, col);
        return solver(grid, newRow, newCol);
      }
    }

    // For each row and column, run the Valid function above and move to the next.
    for (let num = 1; num <= 9; num++) {
      if (valid(grid, row, col, num)) {
        grid[row][col] = num;
        let [newRow, newCol] = next(row, col);

        if (!newRow && !newCol) {
          return true;
        }

        // If every row and column is valid then return true.
        if (solver(grid, newRow, newCol)) {
          return true;
        }
      }
    }

    grid[row][col] = -1;
    return false;
  }

  // Run the Solver function above by passing in the current sudoku array.
  function solveSudoku() {
    let sudoku = deepCopy(sudokuArr);
    solver(sudoku);
    setSudokuArr(sudoku);
  }

  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Sudoku Solver</h1>
        <h2>Craig Charlton</h2>
      </div>
      <div className={styles.body}>
        <table>
          <tbody>
            {
              // Create 9 rows and 9 columns below with an input in each.
              // Styles added for every 3 row and column to add a border.
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex) => {
                return <tr key={rIndex} className={(row + 1) % 3 === 0 ? styles.bottom : ''}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex) => {
                    return <td key={rIndex + cIndex} className={(col + 1) % 3 === 0 ? styles.right : ''}>
                      <input onChange={(e) => onInput(e, row, col)}
                        value={sudokuArr[row][col] === -1 ? '' : sudokuArr[row][col]}
                        className={styles.input}
                        maxLength={1} />
                    </td>
                  })}
                </tr>
              })
            }
          </tbody>
        </table>
        <button onClick={solveSudoku} className={styles.solveBtn}>Solve!</button>
      </div>
    </main>
  )
}

export default SudokuSolver
