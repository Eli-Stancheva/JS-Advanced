function solve(array) {
    let newArr = [];
    let num = 0;
    for (let i = 0; i < array.length; i++) {
        num++;
        if (array[i] === "add") {
            newArr.push(num);
        } else {
            newArr.pop(num);
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        newArr.forEach(x => console.log(x))
    }
}
solve(['add',
    'add',
    'add',
    'add']
)