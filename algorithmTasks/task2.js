const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Find amount of array elements that satistfy the following statement: 
                a^i < a[i] < i! 
                \nEnter the numbers separated by a coma, please: `, (answer) => {
    
    let argsArray = answer.split(',').map((el) => {
        if (Number(el)) {
            return Number(el);
        } else {
            console.error(`ERROR. Invalid input. "${el}" is not a number`);
            process.exit(1);
        }
    });


    console.log(findElemAmount(argsArray));
    rl.close();
});

function findFactorial(n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return n;

    } else {
        return n * findFactorial(n - 1);
    }
}


function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n === 1) {
        return x;

    } else {
        return x * pow(x, n - 1);
    }
}


function findElemAmount(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] > pow(2, i) && arr[i] < findFactorial(i) ){
            counter++;
        }
    }
    return counter;
}

