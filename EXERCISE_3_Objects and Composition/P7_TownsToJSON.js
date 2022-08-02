function towns(array) {
    let result = [];

    class Town {
        constructor(town, latitude, longitude) {
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }

    for (let i = 1; i < array.length; i++) {
        let line = array[i].split('|').map(t => t.trim()).filter(x => x.length != 0);
        let town = line[0];
        let latitude = Number(line[1]).toFixed(2);
        let longitude = Number(line[2]).toFixed(2);

        result.push(new Town(town, latitude, longitude));
    }

    return JSON.stringify(result);
}

console.log(towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));