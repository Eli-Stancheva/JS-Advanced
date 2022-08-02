function solve(...input) {
    input.forEach((x) => console.log(`${typeof x}: ${x}`));

    const typeObj = {};


    for (const el of input) {
        let currElType = typeof el;

        if (typeObj[currElType] === undefined) {
            typeObj[currElType] = 0;
        }
        typeObj[currElType]++;
    }

    const result = Object.entries(typeObj).sort((a, b) => b[1] - a[1]);

    for (const [key, value] of result) {
        console.log(`${key} = ${value}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); })

solve(123, 3433, 'wefe', 'wefwef', 'wewegwesdcd', function () { console.log('Hello world!'); })
