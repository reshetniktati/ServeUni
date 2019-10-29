const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Find amount of array elements that satistfy the following statement: 
            a[i] < (a[i-1] + a[i+1]) / 2
            \nEnter the numbers separated by a coma, please:  `, (answer) => {
    
    let argsArray = answer.split(',').map((el) => {
        if (Number(el)) {
            return Number(el);
        } else {
            console.error(`ERROR. Invalid input. "${el}" is not a number`);
            process.exit(1);
        }
    });

    console.log('Amount of elements: ' + findElemAmount(argsArray));
    rl.close();
});

function findElemAmount(arr) {
    let counter = 0;

    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i] < ((arr[i - 1] + arr[i + 1])) / 2) {
            counter++;
        }
    }
    return counter;
}