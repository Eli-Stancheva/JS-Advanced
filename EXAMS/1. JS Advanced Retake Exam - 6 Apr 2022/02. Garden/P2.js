class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        this.spaceAvailable -= spaceRequired;
        this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        let plant = this.plants.find(e => e.plantName == plantName);

        if (!plant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe == true) {
            throw Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw Error(`The quantity cannot be zero or negative.`);
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity == 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        let plant = this.plants.find(e => e.plantName == plantName);

        if (!plant) {
            throw Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let plantIndex = this.plants.indexOf(plant);
        this.storage.push(`${plant.plantName} (${plant.quantity})`);
        this.plants.splice(plantIndex, 1);
        this.spaceAvailable += plant.spaceRequired;
        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`);

        const sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let sorted = [];
        sortedPlants.forEach(p => sorted.push(p.plantName));

        report.push(`Plants in the garden: ${sorted.join(', ')}`);
        if (this.storage.length == 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            report.push(`Plants in storage: ${this.storage.join(', ')}`);
        }

        return report.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
