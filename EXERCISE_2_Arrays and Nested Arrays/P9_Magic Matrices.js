function magicalMatrix(matrix) {
    let isMagical = true;

    for (let r = 0; r < matrix.length - 1; r++) {
        let sumRow1 = matrix[r].reduce((a, b) => a + b, 0);
        let sumRow2 = matrix[r + 1].reduce((a, b) => a + b, 0);

        let sumCol1 = 0;
        let sumCol2 = 0;
        for (let c = 0; c < matrix.length; c++) {
            sumCol1 += matrix[r][c];
            sumCol2 += matrix[r + 1][c];
        }

        if (sumRow1 !== sumRow2 || sumCol1 !== sumCol2) {
            isMagical = false;
        }
    }
    return isMagical;
}

magicalMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)