const algorithms = require('./algorithms.js');

let arr = [1, 2, -1, 4, 5, 0, 7, 8, 9, 16, 36];
let arr1 = ['t', 6, 'dfg', 'df'];
let n = 8;

test('is calcNatNumber correct', () => {
    expect(algorithms.calcNatNumbers(arr)).toBe(2)
});

test('input items are valid in calcNatNumbers', () => {
    expect(algorithms.calcNatNumbers(arr1)).toBe(1)
});

test('is numbersAmount correct', () => {
    expect(algorithms.numbersAmount(arr)).toBe(4)
});

test('input items are valid in numbersAmount', () => {
    expect(algorithms.numbersAmount(arr1)).toBe(0)
});

test('is pythagoreanTriplet correct', () => {
    let expected = [[ 3, 4, 5 ]];
    expect(algorithms.pythagoreanTriplet(n)).toEqual(expect.arrayContaining(expected))
});





