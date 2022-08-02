function numbers(array) {
    let newArr = [];

    for (const num of array) {
        if(num < 0){
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    newArr.forEach(x => console.log(x));
}

numbers([7, -2, 8, 9]);
numbers([3, -2, 0, -1]);