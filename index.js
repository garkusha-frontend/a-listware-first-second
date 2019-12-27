function integerParser(string) {
    return Math.trunc(+string);
}

function printSpiralMatrix(rowSize, colSize) {
    const matrix = [];
    const output = [];

    let counter = 1,
        currentColumn = 0,
        currentRow = 0,
        lastColumn = colSize - 1,
        lastRow = rowSize - 1;

    for (let i = 0; i < rowSize; i++) {
        matrix[i] = [];
        for (var j = 0; j < colSize; j++) {
            matrix[i][j] = counter;
            counter++;
        }
    }

    while (currentRow <= lastRow && currentColumn <= lastColumn) {

        for (let i = currentColumn; i <= lastColumn; i++) {
            output.push(matrix[currentRow][i]);
        }
        currentRow++;

        for (let i = currentRow; i <= lastRow; i++) {
            output.push(matrix[i][lastColumn]);
        }
        lastColumn--;

        if (currentRow <= lastRow) {
            for (let i = lastColumn; i >= currentColumn; i--) {
                output.push(matrix[lastRow][i]);
            }
            lastRow--;
        }

        if (currentColumn <= lastColumn) {
            for (let i = lastRow; i >= currentRow; i--) {
                output.push(matrix[i][currentColumn]);
            }
            currentColumn++;
        }
    }

    return output;
}

console.log(printSpiralMatrix(2, 2));
console.log(integerParser('0.999999') + 1);