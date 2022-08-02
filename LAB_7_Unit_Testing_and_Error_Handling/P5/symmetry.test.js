const { expect } = require('chai');
const { isSymmetric } = require('./symmetry');

describe('Check for Symmetry', () => {
    it('work with symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('return false for non-array', () => {
        expect(isSymmetric(6)).to.be.false;
    });

    it('return true for symmetric array of 3 element', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('return false if one element is not a number', () => {
        expect(isSymmetric(['1', 2, 1])).to.be.false;
    });

    it('return true for symmetric string array', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });

    it('return false for string ', () => {
        expect(isSymmetric('efwf')).to.be.false;
    });
});