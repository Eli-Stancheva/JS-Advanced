class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        money = Number(money);

        let findName = this.listOfParticipants.find(e => e.name == name);

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        if (findName) {
            return `The ${name} is already registered at the camp.`;
        }

        let price = this.priceForTheCamp[condition];
        if (price > money) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;

    }

    unregisterParticipant(name) {
        let findName = this.listOfParticipants.find(e => e.name == name);

        if (!findName) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let indexName = this.listOfParticipants.indexOf(findName);
        this.listOfParticipants.splice(indexName, 1);
        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let name1 = this.listOfParticipants.find(e => e.name == participant1);
        
        if (!name1) {
            throw new Error(`Invalid entered name.`);
        }
        
        if (typeOfGame == 'Battleship') {
            name1.power += 20;
            return `The ${name1.name} successfully completed the game ${typeOfGame}.`;
        } else if (typeOfGame == 'WaterBalloonFights') {
            let name2 = this.listOfParticipants.find(e => e.name == participant2);
       
            if (!name2) {
                throw new Error(`Invalid entered name.`);
            }
            
            if (name1.condition != name2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }

            if (name1.power > name2.power) {
                name1.wins++;
                return `The ${name1.name} is winner in the game ${typeOfGame}.`;
            } else if (name2.power > name1.power) {
                name2.wins++;
                return `The ${name2.name} is winner in the game ${typeOfGame}.`;
            } else {
                return `There is no winner.`;
            }
        }
    }

    toString() {
        let result = [];
        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        let sorted = this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        sorted.forEach(e => {
            result.push(`${e.name} - ${e.condition} - ${e.power} - ${e.wins}`);
        });

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));



