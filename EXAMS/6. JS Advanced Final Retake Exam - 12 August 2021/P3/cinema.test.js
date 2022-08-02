const { expect } = require('chai');
const { cinema } = require('./cinema');

describe("Cinema", function () {
    describe("showMovies", function () {
        it("array is empty", function () {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it("array is not empty", function () {
            expect(cinema.showMovies(['King Kong', 'The Tomorrow War', 'Joker'])).to.equal('King Kong, The Tomorrow War, Joker');
            expect(cinema.showMovies(['King Kong'])).to.equal('King Kong');
        });
    });

    describe("ticketPrice", function () {
        it("schedule.hasOwnProperty(projectionType)", function () {
            expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
            expect(cinema.ticketPrice("Normal")).to.equal(7.50);
            expect(cinema.ticketPrice("Discount")).to.equal(5.50);
        });

        it("!schedule.hasOwnProperty(projectionType)", function () {
            expect(() => cinema.ticketPrice("notValid")).to.throw('Invalid projection type.');
        });
    });

    describe("swapSeatsInHall", function () {
        it("invalid inputs", function () {
            expect(cinema.swapSeatsInHall("notValid", 'notValid2')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall("notValid", 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, "notValid")).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, -1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-1, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(30, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 30)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(30, 30)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("works", function () {
            expect(cinema.swapSeatsInHall(1, 2)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(10, 2)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(20, 1)).to.equal("Successful change of seats in the hall.");
            expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
        });
    });
});

