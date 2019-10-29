const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Build a Pascal triangle with n rows in it 
            \nEnter the number of triangle rows: `, (answer) => {

    console.log(buildTriangle(Number(answer)));
    rl.close();
});


function buildTriangle(n) {
    let arr = [];
    const defNumber = 1;

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            arr = [defNumber];
            console.log(arr.join(' '));

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
            console.log(arr.join(' '));
        }
    }
}
