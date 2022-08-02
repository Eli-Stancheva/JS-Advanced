function solve(array) {
    let newArr = [];
    array.sort((a, b) => b - a);

    while (array.length !== 0) {
        newArr.push(array.pop());
        newArr.push(array.shift());
    }
    return newArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));