"use strict";

const main = () => {

    const matrix3d = [];

    const matrixSize = +prompt("Enter the matrix size: ");

    createNewMatrix(matrix3d, matrixSize);

    inputMatrixIndexesToFill(matrix3d[0]);

    while (canFinishProgramm(matrix3d[matrix3d.length - 1]) === false) {
        matrix3d.push(multipleTwoMatrixes(matrix3d[matrix3d.length - 1], matrix3d[0]));
    }

    console.log("THE PROGRAM HAS BEEN FINISHED: ", matrix3d);
}
main();
