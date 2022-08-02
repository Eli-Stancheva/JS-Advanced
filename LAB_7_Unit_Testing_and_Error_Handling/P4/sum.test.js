const { assert } = require('chai');
const { sum } = require('./sumOfNumbers');

describe('Sum Checker', () => {
    it('sum correctly', () => {
        assert.equal(sum([1, 2, 3]), 6);
    });

    it('return 0 for empty array', () => {
        assert.equal(sum([]), 0);
    });

    it('return NaN for not a number element', () => {
        assert(Number.isNaN(sum(['e', 1, 2])));
    });
});