class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        altitude = Number(altitude);

        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;

    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);

        if (!this.goals.hasOwnProperty(peak)) {
            throw new Error(`${peak} is not in your current goals`);
        }

        if (this.resources == 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let diff = this.resources - time * 10;

        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else if (diff) {
            this.resources = this.resources - time * 10;
            this.listOfHikes.push({ peak, time, difficultyLevel });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        time = Number(time);
        this.resources = this.resources + (time * 10);

        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        } else {
            return `You have rested for ${time} hours and gained ${time * 10}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length == 0) {
            return `${this.username} has not done any hiking yet`;
        }

        let hikesHard = [];
        let hikesEasy = [];
        for (const h of this.listOfHikes) {
            if (h.difficultyLevel == 'hard') {
                hikesHard.push(h);
            } else if (h.difficultyLevel == 'easy') {
                hikesEasy.push(h);
            }
        }

        if (criteria == 'hard') {
            if (!hikesHard.length) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            let bestTime = Number.MAX_VALUE;
            let bestHike = '';
            hikesHard.forEach(e => {
                if(e.time < bestTime){
                    bestTime = e.time;
                    bestHike = e.peak;
                    return e.time;
                }
            });
            return `${this.username}'s best ${criteria} hike is ${bestHike} peak, for ${bestTime} hours`
        } else if (criteria == 'easy') {
            if (!hikesEasy.length){
                return `${this.username} has not done any ${criteria} hiking yet`;
            }
            
            let bestTime = Number.MAX_VALUE;
            let bestHike = '';
            hikesEasy.forEach(e => {
                if(e.time < bestTime){
                    bestTime = e.time;
                    bestHike = e.peak;
                    return e.time;
                }
            });
            return `${this.username}'s best ${criteria} hike is ${bestTime.peak} peak, for ${bestTime.time} hours`
        } else if (criteria == 'all') {
            let result = [];
            result.push("All hiking records:");

            this.listOfHikes.forEach(e => {
                result.push(`${this.username} hiked ${e.peak} for ${e.time} hours`);
            });

            return result.join('\n');
        }
    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));

//Vili has not done any easy hiking yet
//Vili's best hard hike is Musala peak, for 8 hours
//All hiking records:
//Vili hiked Musala for 8 hours








