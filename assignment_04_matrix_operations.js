// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

 // Display a matrix
function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(" "));
    }
}

// PART A - Transpose a Matrix
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const transposed = [];

    for (let i = 0; i < columns; i++) {
        transposed[i] = [];

        for (let j = 0; j < rows; j++) {
            transposed[i][j] = matrix[j][i];
        }
    }

    return transposed;
}

// PART B - Add Two Matrices
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const columns = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
       result[i] = [];

        for (let j = 0; j < columns; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

// PART C - Multiply Two Matrices
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const columnsA = matrixA[0].length;
    const columnsB = matrixB[0].length;

    const result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < columnsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < columnsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Read a matrix from the user
function readMatrix(rows, columns, name) {
    const matrix = [];

    console.log(`\nEnter values for Matrix ${name}:`);

    for (let i = 0; i < rows; i++) {
        const row = readlineSync
            .question(`Enter row ${i + 1}: `)
            .split(" ")
            .map(Number);

        matrix.push(row);
    }

    return matrix;
}


// ===============================
// MAIN PROGRAM
// ===============================

console.log("===== MATRIX OPERATIONS =====");

// PART A
console.log("\n===== PART A: TRANSPOSE MATRIX =====");

const rowsA = Number(
    readlineSync.question("Enter number of rows: ")
);

const columnsA = Number(
    readlineSync.question("Enter number of columns: ")
);

const matrixA = readMatrix(rowsA, columnsA, "A");

console.log("\nOriginal Matrix:");
displayMatrix(matrixA);

const transposed = transposeMatrix(matrixA);

console.log("\nTransposed Matrix:");
displayMatrix(transposed);


// PART B
console.log("\n===== PART B: ADD TWO MATRICES =====");

const rowsB = Number(
    readlineSync.question("Enter number of rows: ")
);

const columnsB = Number(
    readlineSync.question("Enter number of columns: ")
);

const matrixB1 = readMatrix(rowsB, columnsB, "A");
const matrixB2 = readMatrix(rowsB, columnsB, "B");

console.log("\nMatrix A:");
displayMatrix(matrixB1);

console.log("\nMatrix B:");
displayMatrix(matrixB2);

const sum = addMatrices(matrixB1, matrixB2);

console.log("\nSum of Matrices:");
displayMatrix(sum);


// PART C
console.log("\n===== PART C: MULTIPLY TWO MATRICES =====");

const rowsC1 = Number(
    readlineSync.question("Enter rows for Matrix A: ")
);

const columnsC1 = Number(
    readlineSync.question("Enter columns for Matrix A: ")
);

const rowsC2 = Number(
    readlineSync.question("Enter rows for Matrix B: ")
);

const columnsC2 = Number(
    readlineSync.question("Enter columns for Matrix B: ")
);

if (columnsC1 !== rowsC2) {
    console.log(
        "\nError: Matrix A columns must equal Matrix B rows."
    );
} else {
    const matrixC1 = readMatrix(rowsC1, columnsC1, "A");
    const matrixC2 = readMatrix(rowsC2, columnsC2, "B");

    console.log("\nMatrix A:");
    displayMatrix(matrixC1);

    console.log("\nMatrix B:");
    displayMatrix(matrixC2);

    const product = multiplyMatrices(matrixC1, matrixC2);

    console.log("\nProduct of Matrices (A x B):");
    displayMatrix(product);
} 