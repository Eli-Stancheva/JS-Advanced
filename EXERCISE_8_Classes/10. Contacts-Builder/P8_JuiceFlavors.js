function bottelMaker(array) {
    let jAmount = new Map();
    let jBottles = new Map();

    for (const info of array) {
        let [flavor, quantity] = info.split(' => ');
        quantity = Number(quantity);


        if (!jAmount.has(flavor)) {
            jAmount.set(flavor, 0);
        }

        let totalAmount = jAmount.get(flavor) + quantity;

        if (totalAmount >= 1000) {
            if (!jBottles.has(flavor)) {
                jBottles.set(flavor, 0);
            }

            let newBottles = Math.trunc(totalAmount / 1000);
            let totalBottles = jBottles.get(flavor) + newBottles;
            jBottles.set(flavor, totalBottles);
        }

        jAmount.set(flavor, totalAmount % 1000);
    }

    for (const [key, value] of jBottles) {
        console.log(`${key} => ${value}`);
    }
}

bottelMaker(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
console.log('--------------')
bottelMaker(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
