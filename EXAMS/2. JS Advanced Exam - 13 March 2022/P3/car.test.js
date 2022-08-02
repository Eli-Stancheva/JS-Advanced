const { expect } = require('chai');
const { rentCar } = require('./car');

describe("Rent Car", function () {
    describe("searchCar", function () {
        it("throw error if ship is not an array", function () {
            expect(() => rentCar.searchCar('notArray', 'model')).to.throw('Invalid input!');
        });

        it("throw error if model is not a string", function () {
            expect(() => rentCar.searchCar([], 123)).to.throw('Invalid input!');
        });

        it("throw error if both are invalid", function () {
            expect(() => rentCar.searchCar(123, 123)).to.throw('Invalid input!');
        });


        it("there is a car in the car shop", function () {
            let arr = rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "BMW");
            expect(arr).to.equal(`There is 1 car of model BMW in the catalog!`);
        });

        it("there is no car in the car shop 1", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "")).to.throw('There are no such models in the catalog!');
        });

        it("there is no car in the car shop 2", function () {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi"], "nothing")).to.throw('There are no such models in the catalog!');
        });
    });

    describe("calculatePriceOfCar", function () {
        it("throw error if model is invalid", function () {
            expect(() => rentCar.calculatePriceOfCar(123, 12)).to.throw('Invalid input!');
        });

        it("throw error if days are invalid", function () {
            expect(() => rentCar.calculatePriceOfCar('str', 'days')).to.throw('Invalid input!');
        });


        it("throw error if bpth are invalid", function () {
            expect(() => rentCar.calculatePriceOfCar(123, 'days')).to.throw('Invalid input!');
        });

        it("if work 1", function () {
            expect(rentCar.calculatePriceOfCar("Volkswagen", 2)).to.equal(`You choose Volkswagen and it will cost $40!`);
        });

        it("if work 2", function () {
            expect(rentCar.calculatePriceOfCar("BMW", 2)).to.equal(`You choose BMW and it will cost $90!`);
        });

        it("throw error when there is no such element", function () {
            expect(() => rentCar.calculatePriceOfCar("NoSuchModel", 2)).to.throw('No such model in the catalog!');
        });
    });

    describe("checkBudget", function () {
        it("throw error if inputs are not valid", function () {
            expect(() => rentCar.checkBudget('noNum', 1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 'noNum', 1)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 1, 'noNum')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(1, 'noNum', 'noNum')).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget('noNum', 'noNum', 'noNum')).to.throw('Invalid input!');
        });

        it("rent the car 1", function () {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal(`You rent a car!`);
        });

        it("rent the car 2", function () {
            expect(rentCar.checkBudget(20, 2, 50)).to.equal(`You rent a car!`);
        });

        it("need more money", function () {
            expect(rentCar.checkBudget(20, 2, 30)).to.equal('You need a bigger budget!');
        });
    });
});
