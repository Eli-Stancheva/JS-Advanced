const { expect } = require('chai');
const { flowerShop } = require('./shop');

describe("Flowers Shop", function () {
    describe("calcPriceOfFlowers", function () {
        it("throw error if params are not valid", function () {
            expect(() => flowerShop.calcPriceOfFlowers(123, 123, 123)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 'notNum', 123)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 'notNum', 'notNum')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 12.30, 2)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 12.30, 2.50)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 12, 2.50)).to.throw('Invalid input!');
        });

        it("work correctly 1", function () {
            expect(flowerShop.calcPriceOfFlowers('flower', 12, 2)).to.equal(`You need $24.00 to buy flower!`);
        });
    });

    describe("checkFlowersAvailable", function () {
        it("check if index of flowwer is less tnan 0", function () {
            expect(flowerShop.checkFlowersAvailable('flower', ['notFlower0', 'notFlower1', 'notFlower2'])).to.equal(`The flower are sold! You need to purchase more!`);
        });

        it("check if index of flowwer is bigger tnan 0", function () {
            expect(flowerShop.checkFlowersAvailable('flower', ['notFlower0', 'flower', 'notFlower2'])).to.equal(`The flower are available!`);
        });

        it("check if index of flowwer is equal to 0", function () {
            expect(flowerShop.checkFlowersAvailable('flower', ['flower', 'notFlower1', 'notFlower2'])).to.equal(`The flower are available!`);
        });
    });

    describe("sellFlowers", function () {
        it("throw error if params are not valid", function () {
            expect(() => flowerShop.sellFlowers('notArray', 'space')).throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 'space')).throw('Invalid input!');
            expect(() => flowerShop.sellFlowers('notArray', 10)).throw('Invalid input!');
            expect(() => flowerShop.sellFlowers([], 0)).throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['notFlower0', 'notFlower1'], 2)).throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(['notFlower0', 'notFlower1'], 3)).throw('Invalid input!');
        });

        it("work correctly", function () {
            expect(flowerShop.sellFlowers(['flower0', 'flower1', 'flower2'], 1)).to.equal('flower0 / flower2');
        });
    });
});
