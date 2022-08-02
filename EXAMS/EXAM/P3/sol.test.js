const { expect } = require('chai');
const {  } = require('./solution');

describe('Car service', () => {
    describe('isItExpensive', () => {
        it('no such value', () => {
            expect(carService.isItExpensive('Vlaa')).to.equal(`The overall price will be a bit cheaper`);
        });

        it('no such value', () => {
            expect(carService.isItExpensive('Blaa')).to.equal(`The overall price will be a bit cheaper`);
        });

        it('value of the parameter issue is equal to "Engine" or "Transmission", ', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });
    });


    describe('discount', () => {
        it('check input whether is working 1', () => {
            expect(() => carService.discount('eli', 'rali')).to.throw("Invalid input");
        });

        it('check input whether is working 2', () => {
            expect(() => carService.discount('fg', 1)).to.throw("Invalid input");
        });

        it('check input whether is working 3', () => {
            expect(() => carService.discount(1, 'sd')).to.throw("Invalid input");
        });



        it('15% discount', () => {
            expect(carService.discount(7, 60)).to.equal(`Discount applied! You saved 9$`);
        });


        it('30% discount', () => {
            expect(carService.discount(3, 60)).to.equal(`Discount applied! You saved 9$`);
            expect(carService.discount(6, 60)).to.equal(`Discount applied! You saved 9$`);

        });

        it('smaller or equal to 2', () => {
            expect(carService.discount(8, 40)).to.equal(`Discount applied! You saved 12$`);

        });
    });


    describe('partsToBuy', () => {
        it('inputs', () => {
            expect(() => carService.partsToBuy('sd', ['jmj'])).to.throw("Invalid input");
        });

        it('inputs', () => {
            expect(() => carService.partsToBuy(5, 5)).to.throw("Invalid input");
        });

        it('inputs', () => {
            expect(() => carService.partsToBuy('blsdca', 'bldfa')).to.throw("Invalid input");
        });

        it('inputs', () => {
            expect(() => carService.partsToBuy(['bldfa'], 'bdfla')).to.throw("Invalid input");
        });


        it('If partsCatalog is empty return 0', () => {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
       
        it('return price2', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "blowoff valve", price: 230 }], ["blowoff valve", "injectors"])).to.equal(375);
        });

        it('return price1', () => {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "valve", price: 230 }], ["blowoff valve", "injectors"])).to.equal(145);
        });
    });

});