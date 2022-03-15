const main = () => {

    const matrix3d = [];

    const matrixSize = +prompt("Enter the matrix size: ");

    createNewMatrix(matrix3d, matrixSize);

    const inputData = inputMatrixIndexesToFill(matrix3d[0]);

    console.log(inputData);

    while (canFinishProgramm(matrix3d[matrix3d.length - 1]) === false) {
        matrix3d.push(multipleTwoMatrixes(matrix3d[matrix3d.length - 1], matrix3d[0]));
    }

    const sigmaMatrix = [];

    for (let i = 0; i < matrixSize; i++) {
        sigmaMatrix[i] = [];

        for (let j = 0; j < matrixSize; j++) {
            sigmaMatrix[i][j] = 0;
        }
    }

    for (let i = 0; i < matrix3d.length; i++) {
        for (let j = 0; j < matrixSize; j++) {
            for (let k = 0; k < matrixSize; k++) {
                sigmaMatrix[j][k] += matrix3d[i][j][k];
            }
        }
    }

    console.log("THE PROGRAM HAS BEEN FINISHED: ", sigmaMatrix);
}
main();
