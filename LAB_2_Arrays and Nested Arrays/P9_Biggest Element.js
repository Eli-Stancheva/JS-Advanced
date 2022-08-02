function biggestElement(matrix) {
    let biggestNums = [];
    for (let i = 0; i < matrix.length; i++) {
        let sorted = matrix[i].sort((a, b) => a - b);
        biggestNums.push(sorted.pop());
    }

    biggestNums = biggestNums.sort((a, b) => a - b);
    return biggestNums.pop();
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));

console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));