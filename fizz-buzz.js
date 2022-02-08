
exports.fizzbuzz = function fizzbuzz (value){
    if(typeof value !== 'number') throw Error ('enter a possitive number')
    if(value % 5 === 0 && value % 3 === 0) return 'fizzbuzz'
    if(value % 3 === 0) return 'fizz'
    if(value % 5 === 0) return 'buzz'
    
    return 'fizz'
}