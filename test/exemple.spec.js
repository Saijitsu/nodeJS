const assert = require('assert'); //biblio par default de Node
// Assert /Chai : équivalent de jasmine <= languages
// Mocha <==> Karma : test runner, vont lancer les test
const should = require('chai').should(); // methode
const expect = require('chai').expect; // propriété

//décrit un ensemble de test exécuté:
//description , callback (fonction it: decrit le test lancé au travers d'une fonction annonyme)
describe('Exemple de test', () => {

    let data = [];
    let obj = {};

    //hook : before / beforeEach
    beforeEach(() => {
        data = [1, 2, 0, 4, 5];
        obj = {
            name: 'John',
            lastname: 'Doe',
            email: 'john.doe@gmail.com'
        }
    })

    // pending test: on décrit ce que le test fera
    it('pending test')

    it('2x3 should be equal to 6', () => {
        assert.equal(2 * 3, 6);
    });

    // it('2x3 should be equal to 6', () => {
    //     assert.equal(2 * 3, 1000);
    // });

    it('data size should be equal to 5', () => {
        assert.equal(data.length, 5)
    });

    it('4 should be smaller than 5', () => {
        (4).should.be.below(5) // below : en dessous
    })

    it('5 should be smaller or equal than 5', () => {
        (4).should.be.most(5) // most : au maximun
    })

    it('data size should be equal to 5', () => {
        expect(data.length).to.equal(5)
    });

    it('foo === foo', () => {
        expect('foo').to.equal('foo');
    });

    it('data is an Array', () => {
        expect(data).to.be.an.instanceOf(Array);
    });

    it('data contains value 0', () => {
        expect(data).contains(0);
    });

    it('data not contains value 3', () => {
        expect(data).not.contains(3);
    });

    // .include(haystack, needle, [message])
    it('data contains value 0', () => {
        expect(data).include(0);
    });

    it('data not contains value 3', () => {
        expect(data).not.include(3);
    });

    it('obj is an Object', () => {
        expect(obj).to.be.an.instanceOf(Object);
    });

    it('obj.name == "John"', () => {
        expect(obj).have.property('name', 'John');
    });

    it('obj.name == "John"', () => {
        expect(obj.name).equal('John');
    });

    it('obj have key "name", "lastname", "email"', () => {
        expect(obj).have.all.keys('name', 'lastname', 'email');
    });
});