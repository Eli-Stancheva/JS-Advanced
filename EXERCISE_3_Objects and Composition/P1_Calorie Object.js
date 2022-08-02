function solve(array) {
    const result = {};

    for (let i = 0; i < array.length; i = i + 2) {
        let name = array[i]; 
        let calories = array[i + 1]; 

        result[name] = Number(calories);
    }

    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));