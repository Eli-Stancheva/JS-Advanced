const { expect } = require('chai');
const { bookSelection } = require('./book');

describe('Book selection', () => {
    describe('isGenreSuitable', () => {
        it('check with genre Thriller and valid age (less than 12)', () => {
            let el = bookSelection.isGenreSuitable('Thriller', 6);
            expect(el).to.be.equal(`Books with Thriller genre are not suitable for kids at 6 age`);
        });

        it('check with genre Thriller and valid age (equal to 12)', () => {
            let el = bookSelection.isGenreSuitable('Thriller', 12);
            expect(el).to.be.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });

        it('check with genre Horror and valid age (less than 12)', () => {
            let el = bookSelection.isGenreSuitable('Horror', 6);
            expect(el).to.be.equal(`Books with Horror genre are not suitable for kids at 6 age`);
        });

        it('check with genre Horror and valid age (equal to 12)', () => {
            let el = bookSelection.isGenreSuitable('Horror', 12);
            expect(el).to.be.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });

        it('return `Those books are suitable` 1', () => {
            let el = bookSelection.isGenreSuitable('Love', 13);
            expect(el).to.be.equal(`Those books are suitable`);
        });

        it('return `Those books are suitable` 2', () => {
            let el = bookSelection.isGenreSuitable('Love', 12);
            expect(el).to.be.equal(`Those books are suitable`);
        });

        it('return `Those books are suitable` 3', () => {
            let el = bookSelection.isGenreSuitable(12, 'Love');
            expect(el).to.be.equal(`Those books are suitable`);
        });
    });

    describe('isItAffordable', () => {
        it('trow error if price is not a number', () => {
            expect(() => bookSelection.isItAffordable('NaN', 13)).to.throw('Invalid input');
        });

        it('trow error if budget is not a number', () => {
            expect(() => bookSelection.isItAffordable(13, 'NaN')).to.throw('Invalid input');
        });

        it('trow error if both are not a numbers', () => {
            expect(() => bookSelection.isItAffordable('NaN', 'NaN')).to.throw('Invalid input');
        });

        it('return `Book bought. You have 4$ left` 1', () => {
            let el = bookSelection.isItAffordable(14, 18);
            expect(el).to.equal(`Book bought. You have 4$ left`);
        });

        it('return `Book bought. You have 4$ left` 2', () => {
            let el = bookSelection.isItAffordable(18, 18);
            expect(el).to.equal(`Book bought. You have 0$ left`);
        });

        it('return `Book bought. You have 4$ left`', () => {
            let el = bookSelection.isItAffordable(18, 14);
            expect(el).to.equal(`You don't have enough money`);
        });
    });

    describe('suitableTitles', () => {
        it('trow error if first param is not an array', () => {
            expect(() => bookSelection.suitableTitles('notArr', 'Horror')).to.throw('Invalid input');
        });

        it('trow error if second param is not a string', () => {
            expect(() => bookSelection.suitableTitles([], 123)).to.throw('Invalid input');
        });

        it('trow error if both params are not valid', () => {
            expect(() => bookSelection.suitableTitles(123, 123)).to.throw('Invalid input');
        });

        it('both params are valid', () => {
            expect(() => bookSelection.suitableTitles([], 'Love')).not.to.throw('Invalid input');
        });

        it('work corectly 1', () => {
            expect(bookSelection.suitableTitles([
                { title: "The Da Vinci Code", genre: "Crime" },
                { title: "Presumed Innocent", genre: "Crime" }
            ], 'Crime')).to.deep.equal(["The Da Vinci Code", "Presumed Innocent"]);

        });

        it('work corectly 2', () => {
            expect(bookSelection.suitableTitles([
                { title: "The Da Vinci Code", genre: "Crime" },
                { title: "The Da Vinci Code", genre: "Crime" }
            ], 'Love')).to.deep.equal([]);

        });
    });
});