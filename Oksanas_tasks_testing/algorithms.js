/* task 178b
Given natural numbers. Calculate amount of numbers, which are multiples of 3 and not multiple of 5 */

function calcNatNumbers(str) {
  if (!str) {
    return 'Input is empty. Enter numbers!'
  }
  if (Number(str) < 0) {
    return 'Invalid input. Enter numbers bigger than 0'
  }
  const argsArray = str.split(',').map((el) => {
    return Number(el);
  });

  const counter = argsArray.filter(num => num % 3 === 0 && num % 5 !== 0).length;
  return counter
};


/* task 178w
Given natural numbers. Calculate amount of numbers, which are squares of natural even numbers  */

function numbersAmount(str) {
  if (!str) {
    return 'Input is empty. Enter numbers!'
  }

  if (Number(str) < 0) {
    return 'Invalid input. Enter numbers bigger than 0'
  }

  const argsArray = str.split(',').map((el) => {
    return Number(el);
  });

  const evenNaturalNumbers = argsArray.filter(num => num % 2 === 0);
  let calculator = 0;
  evenNaturalNumbers.forEach(function (evenNum) {
    if (Math.sqrt(evenNum) % 2 === 0) {
      calculator++;
    }
  });
  
  return calculator
}

console.log(numbersAmount('-1, 4'))


/* task 554
Given natural number n. Get all the Pythagorean
triples of natural numbers, each of which does not exceed n.
a * a + b * b = c * c (a ≤ b ≤ c ≤ n)  */
function pythagoreanTriplet(n) {
  if (!n) {
    return 'Input is empty. Enter numbers!'
  } 
  if (isNaN(n)) {
    return 'Invalid input. Enter number!'
  }
  if (n < 0) {
    return 'Invalid input. Enter number bigger than 0'
  }

  let result = [];
  for (let a = 1; a < n; a++) {
    for (let b = a; b < n; b++) {
      let c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0 & c <= n) {
        result.push([a, b, c])
      }    
    }
  }
  return result
};


module.exports = {
  calcNatNumbers,
  numbersAmount,
  pythagoreanTriplet
}
