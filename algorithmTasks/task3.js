const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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


function buildTriangle(n) {
    let arr = [];
    const defNumber = 1;
    let matrix = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr = [defNumber];

        } else {
            let tempArr = [];

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

        let a = arr.join(' ').split('');
        let row = new Array(n * 2 - 1).fill(' ');
        row.splice((Math.floor(row.length / 2) - i), a.length, ...a );

        matrix.push(row.join(''));
        
    } return matrix.join('\n');
}

module.exports = buildTriangle;