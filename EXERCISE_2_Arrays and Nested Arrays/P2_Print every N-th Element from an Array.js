function evryNElement(array, step) {
    return array.filter((el, index) => index % step == 0);
}
console.log(evryNElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2
));