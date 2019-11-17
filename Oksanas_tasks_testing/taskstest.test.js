const algorithms = require('./algorithms.js');

let str = '1, 2, -1, 4, 5, 0, 7, 8, 9, 16, 36';
let str1 = 't, 6, dfg, df';
let str3 = 0;
let str4 = '';
let n = 8;
let n1 = 0;
let n2 = -1;
let n3 = '';
let n4 = 'test';


describe('is caclNatNumber correct', () => {

    test('is calcNatNumber result correct ', () => {
        expect(algorithms.calcNatNumbers(str)).toBe(2)
    });

    test('is function choose only numbers', () => {
        expect(algorithms.calcNatNumbers(str1)).toBe(1)
    });

    test ('empty input', () => {
        expect(algorithms.calcNatNumbers(str4)).toBe('Invalid input. Enter numbers bigger than 0!')
    });

    test ('zero in input', () => {
        expect(algorithms.calcNatNumbers(str3)).toBe('Invalid input. Enter numbers bigger than 0!')
    });
})

describe('is numbersAmount correct', () => {

    test('is numbersAmount result correct', () => {
        expect(algorithms.numbersAmount(str)).toBe(4)
    });

    test('input items are numbers in numbersAmount', () => {
        expect(algorithms.numbersAmount(str1)).toBe(0)
    });

    test ('empty input', () => {
        expect(algorithms.calcNatNumbers(str4)).toBe('Invalid input. Enter numbers bigger than 0!')
    });

    test ('zero in input', () => {
        expect(algorithms.calcNatNumbers(str3)).toBe('Invalid input. Enter numbers bigger than 0!')
    });
});

describe('is pythagoreanTriplet correct', () => {
    
    test('is return value correct', () => {
        let expected = [[ 3, 4, 5 ]];
        expect(algorithms.pythagoreanTriplet(n)).toEqual(expect.arrayContaining(expected))
    });

    test('input empty', () => {
        expect(algorithms.pythagoreanTriplet(n3)).toBe('Input is empty. Enter number!')
    });

    test('negative input', () => {
        expect(algorithms.pythagoreanTriplet(n2)).toBe('Invalid input. Enter number bigger than 0')
    });

    test('zero input', () => {
        expect(algorithms.pythagoreanTriplet(n1)).toBe('Invalid input. Enter number bigger than 0')
    });

    test('string input', () => {
        expect(algorithms.pythagoreanTriplet(n4)).toBe('Invalid input. Enter number!')
    });
})







