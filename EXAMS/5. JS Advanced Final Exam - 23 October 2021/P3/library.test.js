const { expect } = require('chai');
const { library } = require('./library');

describe("Library", function () {
    describe("calcPriceOfBook", function () {
        it("throw error if params are not valid", function () {
            expect(() => library.calcPriceOfBook(123, 'year')).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Hungr eGames', 2004.3)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook(123, 2004.3)).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook('Hungr Games', 'string')).to.throw("Invalid input");
            expect(() => library.calcPriceOfBook(123, 123)).to.throw("Invalid input");
        });

        it("work 1", function () {
            expect(library.calcPriceOfBook('Hunger Games', 1980)).to.equal(`Price of Hunger Games is 10.00`);
        });

        it("work 2", function () {
            expect(library.calcPriceOfBook('Hunger Games', 1970)).to.equal(`Price of Hunger Games is 10.00`);
        });

        it("work 3", function () {
            expect(library.calcPriceOfBook('Hunger Games', 2005)).to.equal(`Price of Hunger Games is 20.00`);
        });
    });

    describe("findBook", function () {
        it("throw error if the array is empty", function () {
            expect(() => library.findBook([], 'hunger Games')).to.throw("No books currently available");
        });

        it("work 1", function () {
            expect(library.findBook(['Hunger Games', 'Another Book'], 'Hunger Games')).to.equal("We found the book you want.");
        });

        it("work 2", function () {
            expect(library.findBook(['Hunger Games', 'Another Book'], 'Book')).to.equal("The book you are looking for is not here!");
        });
    });

    describe("arrangeTheBooks", function () {
        it("throw error if param is not valid", function () {
            expect(() => library.arrangeTheBooks('notNum')).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(1.20)).to.throw("Invalid input");
            expect(() => library.arrangeTheBooks(-1)).to.throw("Invalid input");
        });

        it("work 1", function () {
            expect(library.arrangeTheBooks(5)).to.equal("Great job, the books are arranged.");
        });

        it("work 2", function () {
            expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.");
        });

        it("work 3", function () {
            expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.");
        });

        it("work 4", function () {
            expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.");
        });
    });
});
