const { expect } = require('chai');
const { rgbToHexColor } = require('./rgb-to-hex');

describe('RGB to Hex', () => {
    it('should return #000000 for (0, 0, 0)', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
    });

    it('should return #010101 for (1, 1, 1)', () => {
        expect(rgbToHexColor(1, 1, 1)).to.equal("#010101");
    });

    it('should return #FFFFFF for (255, 255, 255)', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
    });

    it('should return #ADD8E6 for (173, 216, 230)', () => {
        expect(rgbToHexColor(173, 216, 230)).to.equal("#ADD8E6");
    });

    it('return undefined if some of the inputs are not integer', () => {
        expect(rgbToHexColor('notInt', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 'notInt', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 'notInt')).to.be.undefined;
    });

    it('return undefined if some of the inputs are out of bound in the upper case', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it('return undefined if some of the inputs are out of bound in the lower case', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
});