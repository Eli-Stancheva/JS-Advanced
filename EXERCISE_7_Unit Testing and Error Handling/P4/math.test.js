const { expect } = require('chai');
const { mathEnforcer } = require('./math');

describe('Math Enforcer', () => {
    describe('addFive', () => {
        it('return undefind if typeof num is not a number', () => {
            expect(mathEnforcer.addFive('notAnumber')).to.be.undefined;
        });

        it('should work correctly', () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it('should work correctly with negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should work correctly with floating-point number', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.1);
        });
    });

    describe('subtractTen', () => {
        it('return undefind if typeof num is not a number', () => {
            expect(mathEnforcer.subtractTen('notAnumber')).to.be.undefined;
        });

        it('should work correctly', () => {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });

        it('should work correctly with negative number', () => {
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });

        it('should work correctly with floating-point number', () => {
            expect(mathEnforcer.subtractTen(10.14)).to.be.closeTo(0.14, 0.1);
        });
    });

    describe('sum', () => {
        it('return undefined if both params are not a numbers', () => {
            expect(mathEnforcer.sum('a', 'b')).to.be.undefined;
        });

        it('return undefined if the first param is not a numbers', () => {
            expect(mathEnforcer.sum('a', 1)).to.be.undefined;
        });

        it('return undefined if the second param is not a numbers', () => {
            expect(mathEnforcer.sum(1, 'b')).to.be.undefined;
        });

        it('should work correctly', () => {
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
        });

        it('should work correctly with negative numbers', () => {
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
        });

        it('should work correctly with floating-point number', () => {
            expect(mathEnforcer.sum(10.40, 12.50)).to.be.closeTo(22.90, 0.1);
        });
    });
});