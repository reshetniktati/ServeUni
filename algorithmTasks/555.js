const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function buildTriangle(n) {
  let arr = [];
  const defNumber = 1;
  const matrix = [];

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      arr = [defNumber];
    } else {
      const tempArr = [];

      for (let j = 0; j < arr.length; j++) {
        if (j === 0) {
          tempArr.push(defNumber);
        } else {
          tempArr.push(arr[j] + arr[j - 1]);
        }

        if (j === arr.length - 1) {
          tempArr.push(defNumber);
        }
      }
      arr = tempArr;
    }

    const numbersStr = arr.join(' ');
    const row = new Array(n * 2 - 1).fill(' ');
    row.splice((n - i), numbersStr.length, ...numbersStr);

    matrix.push(row.join(''));
  } return matrix.join('\n');
}

rl.question(`Build a Pascal triangle with n rows in it 
            \nEnter the number of triangle rows: `, (answer) => {
  if (Number(answer)) {
    console.log(buildTriangle(Number(answer)));
  } else {
    console.error(`ERROR. Invalid input. '${answer} is not a number.`);
    process.exit(1);
  }

  rl.close();
});

module.exports = buildTriangle;
