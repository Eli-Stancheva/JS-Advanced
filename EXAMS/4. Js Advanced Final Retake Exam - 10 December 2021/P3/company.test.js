const { expect } = require('chai');
const { companyAdministration } = require('./companyAdministration');

describe("Company Administration", function () {
    describe("hiringEmployee", function () {
        it("throw error cuz position is not programmer", function () {
            expect(() => companyAdministration.hiringEmployee('Eli', 'QA', 5)).to.throw(`We are not looking for workers for this position.`);
        });

        it("position is programmer and yearsExperience > 3", function () {
            expect(companyAdministration.hiringEmployee('Eli', 'Programmer', 5)).to.equal(`Eli was successfully hired for the position Programmer.`);
        });

        it("position is programmer and yearsExperience = 3", function () {
            expect(companyAdministration.hiringEmployee('Eli', 'Programmer', 3)).to.equal(`Eli was successfully hired for the position Programmer.`);
        });

        it("position is programmer and yearsExperience < 3", function () {
            expect(companyAdministration.hiringEmployee('Eli', 'Programmer', 2)).to.equal(`Eli is not approved for this position.`);
        });
    });

    describe("calculateSalary", function () {
        it("throw error 1", function () {
            expect(() => companyAdministration.calculateSalary('notNum')).to.throw('Invalid hours');
        });

        it("throw error 2", function () {
            expect(() => companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });

        it("if hours > 160", function () {
            expect(companyAdministration.calculateSalary(170)).to.equal(3550);
        });

        it("if hours < 160", function () {
            expect(companyAdministration.calculateSalary(150)).to.equal(2250);
        });

        it("if hours = 160", function () {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
    });

    describe("firedEmployee", function () {
        it("throw error if params are not valid", function () {
            expect(() => companyAdministration.firedEmployee('notArray', 2)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'notInt')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 12.50)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw('Invalid input');
        });

        it("work", function () {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
        });
    });
});
