/*
const expect = require('chai').expect
const fizzbuzz = require('../fizz-buzz').fizzbuzz

describe('fizz buzz', () => {
    it('returns "fiz" if the input is 3', () => {
        expect(fizzbuzz(3)).to.equal('fizz')
    })
    it('returns "buzz" if the input is 5', () => {
        expect(fizzbuzz(5)).to.equal('buzz')
    })
    it('returns "fizzbuzz" if the input is a multiple of 5 and 3', () => {
        expect(fizzbuzz(15)).to.equal('fizzbuzz')
    })
    it('returns the original number if the input is nothing special', () => {
        expect(fizzbuzz(2)).to.equal(2)
    })
    it('throw an error if nothing is passed in', () => {
        expect(() => fizzbuzz()).to.throw(/nothing was entered/)
    })
})
*/

exports.fizzbuzz = function fizzbuzz (value) {
    if (typeof value !== 'number') throw Error('You need to provide a positive number')
    
    if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz'
    if (value % 3 === 0) return 'Fizz'
    if (value % 5 === 0) return 'Buzz'
    return value
}
