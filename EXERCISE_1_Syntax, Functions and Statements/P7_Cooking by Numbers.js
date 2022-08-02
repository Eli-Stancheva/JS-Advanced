function cooking(number, operation1, operation2, operation3, operation4, operation5) {
    number = Number(number);
    let commandList = [operation1, operation2, operation3, operation4, operation5];

    let chop = x => x / 2;
    let dice = x => Math.sqrt(x);
    let spice = x => ++x;
    let bake = x => x * 3;
    let fillet = x => x - x * 0.20;

    for (let i = 0; i < commandList.length; i++) {
        switch (commandList[i]) {
            case "chop":
                number = chop(number);
                break;
            case "dice":
                number = dice(number);
                break;
            case "spice":
                number = spice(number);
                break;
            case "bake":
                number = bake(number);
                break;
            case "fillet":
                number = fillet(number);
                break;
        }
        console.log(number);
    }
}

cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet');