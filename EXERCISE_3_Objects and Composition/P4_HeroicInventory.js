function registerForHeroes(array){
    let result = [];

    class Hero {
        constructor(name, level, items){
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }

    for (const el of array) {
        let [name, level, items] = el.split(" / ");
        level = Number(level);
        items = items ? items.split(", ") : [];

        result.push(new Hero(name, level, items));
    }

    return JSON.stringify(result);
}

console.log(registerForHeroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']));