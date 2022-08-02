function catalog(map) {
    let object = {};  // {letter : {name, price}}

    for (let i = 0; i < map.length; i++) {
        let productInfo = map[i].split(" : ");
        let productName = productInfo[0];
        let productPrice = productInfo[1];

        let letter = productName[0];

        if (!object.hasOwnProperty(letter)) {
            object[letter] = {};
        }
        object[letter][productName] = productPrice;

    }

    let sortedLetters = Object.keys(object).sort((a, b) => a.localeCompare(b));
    for (const letter of sortedLetters) {
        console.log(letter);

        let sortedProducts = Object.keys(object[letter]).sort((a, b) => a.localeCompare(b));
        for (const prod of sortedProducts) {
            console.log(`  ${prod}: ${object[letter][prod]}`);   
        }
    }
}

catalog(['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']);