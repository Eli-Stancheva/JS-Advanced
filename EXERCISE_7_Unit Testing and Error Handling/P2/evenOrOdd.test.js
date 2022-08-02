const { expect } = require('chai');
const { isOddOrEven } = require('./evenOrOdd');

describe('Even Or Odd', () => {
    it('return undefined if inputed string is not a string', () => {
        expect(isOddOrEven(3.14)).to.be.undefined;
    })

    it('return undefined if inputed string is not a string', () => {
        expect(isOddOrEven([1, 2, 3])).to.be.undefined;
    })

    it('return even if string.length is even', () => {
        expect(isOddOrEven('even')).to.equal('even');
    })

    it('return odd if string.length is odd', () => {
        expect(isOddOrEven('odd')).to.equal('odd');
    })
})