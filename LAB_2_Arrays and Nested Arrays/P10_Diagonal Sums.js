function diagonalSums(matrix) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let r = 0; r < matrix.length; r++) {
       for (let c = 0; c < matrix[r].length; c++) {
           if(r == c){
                mainDiagonal += matrix[r][c];
           }

           if ((r + c) == (matrix.length - 1)){
               secondaryDiagonal += matrix[r][c];
           }
       }
    }
    console.log(mainDiagonal + " " + secondaryDiagonal);
}

diagonalSums([
    [20, 40],
    [10, 60]
]);

diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);