function company(arr) {
    let cars = new Map();

    for (const info of arr) {
        let [brand, model, producedCars] = info.split(' | ');
        producedCars = Number(producedCars);

        if (!cars.has(brand)) {
            cars.set(brand, {});
        }

        if (!cars.get(brand).hasOwnProperty(model)) {
            cars.get(brand)[model] = producedCars;
        } else {
            cars.get(brand)[model] += producedCars;
        }
    }

    for (const [key, value] of cars) {
        console.log(key);
        for (const el in value) {
            console.log(`###${el} -> ${value[el]}`);
        }
    }
}

company(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);