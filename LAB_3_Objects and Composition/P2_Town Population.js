function register(array){
    const towns = {};

    for (let town of array) {
        let[name, population] = town.split(' <-> ');
        population = Number(population);

        if(towns[name] != undefined){
            population += towns[name];
        }

        towns[name] = population;
    }

    for (let t in towns) {
        console.log(`${t} : ${towns[t]}`);
    }
}

register(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)