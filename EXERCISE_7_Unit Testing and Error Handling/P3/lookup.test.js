const { expect } = require('chai');
const { lookupChar } = require('./lookup');

describe('Char Lookup', () => {
    it('should return char at the inputed index of the string', () => {
        expect(lookupChar('eli', 1)).to.equal('l');
    });

    it('return undefined if both are atrings', () => {
        expect(lookupChar('a', 'b')).to.be.undefined;
    });

    it('return undefined if both are integers', () => {
        expect(lookupChar(1, 2)).to.be.undefined;
    });

    it('return "Incorrect index" if str.length is equal with the index', () => {
        expect(lookupChar('eli', 3)).to.equal("Incorrect index");
    });

    it('return "Incorrect index" if str.length is bigger with the index', () => {
        expect(lookupChar('eli', 10)).to.equal("Incorrect index");
    });

    it('return "Incorrect index" if str.length is emptyb but equal index is bigger', () => {
        expect(lookupChar('', 1)).to.equal("Incorrect index");
    });

    it('return "Incorrect index" if index is less than 0', () => {
        expect(lookupChar('eli', -1)).to.equal("Incorrect index");
    });

    it('return undefined if the index is double', () => {
        expect(lookupChar('eli', 3.14)).to.be.undefined;
    });
});