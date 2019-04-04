const assert = require('assert'); //biblio par default de Node
// Assert /Chai : équivalent de jasmine <= languages
// Mocha <==> Karma : test runner, vont lancer les test
const should = require('chai').should(); // methode
const expect = require('chai').expect; // propriété

const Calc = require('../calculatrice/js/calculatrice');

describe('Test de la calculatrice', () => {

    it('1+1 should be equal to 2', () => {
        assert.equal(Calc.addition(1, 1), 2);
    });

    it('1-1 should be equal to 0', () => {
        assert.equal(Calc.substract(1, 1), 0);
    });

    it('2/2 should be equal to 1', () => {
        assert.equal(Calc.divide(2, 2), 1);
    });

    it('2/2 should be equal to 2', () => {
        assert.equal(Calc.divide(2, 2), 1);
    });

    it('2/0 should be equal to 0', () => {
        assert.equal(Calc.divide(2, 0), Infinity);
    });

    it('2*3 should be equal to 6', () => {
        assert.equal(Calc.multiply(2, 3), 6);
    });

    it('2*0 should be equal to 0', () => {
        assert.equal(Calc.multiply(2, 0), 0);
    });

});

// $ npm test test/calculatrice.spec.js