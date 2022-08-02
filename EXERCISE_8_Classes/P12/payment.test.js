const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage');

describe('Payment Package', () => {
    //test constructor
    it('test the constructor', () => {
        let obj = new PaymentPackage('HR Services', 1500);
        expect(obj._name).to.be.equal('HR Services');
        expect(obj._value).to.be.equal(1500);
        expect(obj._VAT).to.be.equal(20);
        expect(obj._active).to.be.equal(true);
    });

    //test name
    it('Should throw errow when the new Name is a number', () => {
        expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
    });

    it('trow error when name is empty string', () => {
        expect(() => new PaymentPackage('', 1500)).to.throw('Name must be a non-empty string');
    });

    it('trow error when name is array', () => {
        expect(() => new PaymentPackage([1, 2, 3], 1500)).to.throw('Name must be a non-empty string');
    });

    it('not trow error if the name is good', () => {
        expect(() => new PaymentPackage('eli', 1500)).not.to.throw('Name must be a non-empty string');
    });

    //test value
    it('trow error if the value is not a num', () => {
        expect(() => new PaymentPackage('eli', 'NaN')).to.throw('Value must be a non-negative number');
    });

    it('trow error if the value is array', () => {
        expect(() => new PaymentPackage('eli', [1, 2, 3])).to.throw('Value must be a non-negative number');
    });

    it('trow error if the value is not a num', () => {
        expect(() => new PaymentPackage('eli', -1)).to.throw('Value must be a non-negative number');
    });

    it('not trow error if the value is not a num', () => {
        expect(() => new PaymentPackage('eli', 1500)).not.to.throw('Value must be a non-negative number');
    });

    it('set value to 0', () => {
        let obj = new PaymentPackage('Name', 100);
        assert.doesNotThrow(() => { obj.value = 0 })
    });

    //test VAT
    it('throw errow when the new VAT is a string', () => {
        let vat = new PaymentPackage('abc', 123);
        expect(() => vat.VAT = 'abc').to.throw('VAT must be a non-negative number');
    });

    it('trow error if the value is not a num', () => {
        let vat = new PaymentPackage('abc', 123);
        expect(() => vat.VAT = 0).not.to.throw('VAT must be a non-negative number');
    });

    it('not trow error if the value is not a num', () => {
        let vat = new PaymentPackage('abc', 123);
        expect(() => vat.VAT = 120).not.to.throw('Value must be a non-negative number');
    });

    it('Should throw errow when the new VAT is negative', () => {
        let flagClass = new PaymentPackage('abc', 123);
        expect(() => flagClass.VAT = -123).to.throw('VAT must be a non-negative number');
    });

    //test active
    it('throw errow when the new active is not a boolean', () => {
        let obj = new PaymentPackage('abc', 123);
        expect(() => obj.active = 'abc').to.throw('Active status must be a boolean');
    });

    it('trow error if active is a num', () => {
        let obj = new PaymentPackage('abc', 123);
        expect(() => obj.active = [1, 2, 3]).to.throw('Active status must be a boolean');
    });

    it('not trow error if active is bool', () => {
        let obj = new PaymentPackage('abc', 123);
        expect(() => obj.active = true).not.to.throw('Active status must be a boolean');
    });

    it('not trow error if active is bool', () => {
        let obj = new PaymentPackage('abc', 123);
        expect(() => obj.active = false).not.to.throw('Active status must be a boolean');
    });

    it('Should throw errow when the new VAT is negative', () => {
        let obj = new PaymentPackage('abc', 123);
        expect(() => obj.active = -123).to.throw('Active status must be a boolean');
    });

    //test toString()
    it('should return a string as all the input is correct', () => {
        let obj = new PaymentPackage('abc', 123);
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(obj.toString()).to.equal(output.join('\n'));
    });

    it('should return a string when active is "false"', () => {
        let obj = new PaymentPackage('abc', 123);
        obj.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 20%): 147.6`
        ]
        expect(obj.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct', () => {
        let obj = new PaymentPackage('abc', 123);
        obj.VAT = 30;
        let output = [
            `Package: abc`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(obj.toString()).to.equal(output.join('\n'));
    });

    it('Should return a string as all the input is correct', () => {
        let obj = new PaymentPackage('abc', 123);
        obj.VAT = 30;
        obj.active = false;
        let output = [
            `Package: abc (inactive)`,
            `- Value (excl. VAT): 123`,
            `- Value (VAT 30%): 159.9`
        ]
        expect(obj.toString()).to.equal(output.join('\n'));
    });
});