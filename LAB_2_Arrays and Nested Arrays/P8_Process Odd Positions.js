function oddPos(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            result.push(array[i]);
        }
    }

    result = result.reverse().map(x => x * 2);
    console.log(result.join(" "));
}

oddPos([10, 15, 20, 25]);
oddPos([3, 0, 10, 4, 7, 3]);