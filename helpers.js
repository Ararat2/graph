"use strict";

const createNewMatrix = (matrix3d, size) => {
    const startIndex = matrix3d.length;

    matrix3d[startIndex] = [];

    for (let i = 0; i < size; i++) {
        matrix3d[startIndex][i] = [];

        for (let j = 0; j < size; j++) {
            matrix3d[startIndex][i][j] = 0;
        }
    }
}

const isMatrixContainOnlyZeros = matrix => {
    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] !== 0) {
                result = false;
                break;
            }
        }

        if (result === false) break;
    }

    return result;
}

const isDiagonalContainOnlyZeros = matrix => {
    let result = true;

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] !== 0) {
            result = false;
            break;
        }
    }

    return result;
}

const canFinishProgramm = (matrix) => {
    return isDiagonalContainOnlyZeros(matrix) === false || isMatrixContainOnlyZeros(matrix);
}

const inputMatrixIndexesToFill = matrix => {
    let maxInputCount = matrix[0].length ** 2;

    for (let i = 0; i < maxInputCount; i++) {
        let input = prompt("Enter row and column: ").split(/\s/);

        if (input[0] === "") break;

        if (+input[1] === 0) continue;

        matrix[+input[0] - 1][+input[1] - 1] = 1;
    }
}

const multipleTwoMatrixes = (mat1, mat2) => {
    const res = [];

    let i, j, k;

    for (i = 0; i < mat1.length; i++) {
        res[i] = [];

        for (j = 0; j < mat1.length; j++) {
            res[i][j] = 0;

            for (k = 0; k < mat1.length; k++) {
                res[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }

    return res;
}