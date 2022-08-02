function neighbors(matrix) {
    let counter = 0;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length - 1; c++) {
            if (matrix[r][c] === matrix[r][c + 1]) {
                counter++;
            }
        }
    }

    for (let c = 0; c < matrix[0].length; c++) {
        for (let r = 0; r < matrix.length - 1; r++) {
            if (matrix[r][c] === matrix[r + 1][c]) {
                counter++;
            }
        }
    }
    console.log(counter);
}

neighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);

neighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);