const algorithms = require('./algorithms.js');

let str = '1, 2, -1, 4, 5, 0, 7, 8, 9, 16, 36';
let str1 = 't, 6, dfg, df';
let str2 = '-1';
let str3 = 0;
let str = '';
let n = 8;
let n1 = 0;
let n2 = -1;
let n3 = ''
let n4 = 'test'

test('is calcNatNumber correct', () => {
    expect(algorithms.calcNatNumbers(str)).toBe(2)
});

test('input items are valid in calcNatNumbers', () => {
    expect(algorithms.calcNatNumbers(str1)).toBe(1)
});

test('is numbersAmount correct', () => {
    expect(algorithms.numbersAmount(str)).toBe(4)
});

test('input items are valid in numbersAmount', () => {
    expect(algorithms.numbersAmount(str1)).toBe(0)
});

test('is pythagoreanTriplet correct', () => {
    let expected = [[ 3, 4, 5 ]];
    expect(algorithms.pythagoreanTriplet(n)).toEqual(expect.arrayContaining(expected))
});





