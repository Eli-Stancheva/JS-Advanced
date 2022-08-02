const { expect } = require('chai');
const { createCalculator } = require('./addSubtract');

describe('Add / Subtract', () => {

    it('return 0 when call get', () => {
        let value = createCalculator().get();
        expect(value).to.equal(0);
    })

    it('return correct answer when call add', () => {
        let calc = createCalculator();
        calc.add(5);
        calc.add(1);
        let value = calc.get();
        expect(value).to.equal(6);
    })

    it('return correct answer when call subtract', () => {
        let calc = createCalculator();
        calc.subtract(5);
        calc.subtract(1);
        let value = calc.get();
        expect(value).to.equal(-6);
    })

    it('should fail if call add with not a number', () => {
        let calc = createCalculator();
        calc.add(5);
        calc.add('eli');
        let value = calc.get();
        expect(value).to.be.NaN;
    })

    it('should fail if call subtract with not a number', () => {
        let calc = createCalculator();
        calc.subtract(5);
        calc.subtract('eli');
        let value = calc.get();
        expect(value).to.be.NaN;
    })

    it('ckeck if returns function', () => {
        expect(typeof createCalculator().add).to.equal('function');
        expect(typeof createCalculator().subtract).to.equal('function');
        expect(typeof createCalculator().get).to.equal('function');
    })

    it('return an object', () => {
        let calc = createCalculator();
        expect(calc).to.be.a('object');
    })

    it('value cant be accesed', () => {
        let calc = createCalculator();
        expect(calc.value).to.be.undefined;
    })

    it('value cant be changed', () => {
        let calc = createCalculator();
        expect(calc.value += 5).to.be.NaN;
    })
});