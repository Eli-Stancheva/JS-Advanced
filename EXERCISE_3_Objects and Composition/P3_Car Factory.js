function carFactory(object) {
    let engine = [
        { power: 90, volume: 1800 },
        { power: 120, volume: 2400 },
        { power: 200, volume: 3500 }
    ];

    let carriage = [
        { type: 'hatchback', color: object.color },
        { type: 'coupe', color: object.color }
    ];

    let wheels = object.wheelsize % 2 == 1 ? object.wheelsize : object.wheelsize - 1;

    return {
        model: object.model,
        engine: engine.filter(e => e.power >= object.power)[0],
        carriage: carriage.filter(c => c.type == object.carriage)[0],
        wheels: [wheels, wheels, wheels, wheels]
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));