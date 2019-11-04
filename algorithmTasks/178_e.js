const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function findFactorial(n) {
  if (n === 0) {
    return 1;
  } if (n === 1) {
    return n;
  }
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


function pow(x, n) {
  if (n === 0) {
    return 1;
  } if (n === 1) {
    return x;
  }
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= x;
  }
  return result;
}


function findElemAmount(arr) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > pow(2, i) && arr[i] < findFactorial(i)) {
      counter++;
    }
  }
  return counter;
}

rl.question(`Find amount of array elements that satistfy the following statement: 
                a^i < a[i] < i! 
                \nEnter the numbers separated by a coma, please: `, (answer) => {
  const argsArray = answer.split(',').map((el) => {
    if (Number.isNaN(Number(el))) {
      console.error(`ERROR. Invalid input. "${el}" is not a number`);
      process.exit(1);
    }
    return Number(el);
  });

  console.log(findElemAmount(argsArray));
  rl.close();
});


module.exports = findElemAmount;
