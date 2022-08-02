function solve(array) {
    let newArr = [];

    let bigger = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] >= bigger){
            newArr.push(array[i]);
            bigger = array[i];
        }
    }
    return newArr;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)