const fs = require('fs');
const folderPath = ('./base');
const readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log('Hello!. There is student list: ');

let users = fs.readdirSync(folderPath);

users.forEach((user) => {
    console.log(user)
});


rl.question('\nChose the user name: ', (user) => {
    console.log(`There are ${user}'s tasks: `);

    let userTasks = fs.readdirSync(`${folderPath}/${user}`);

    userTasks.forEach((task) => {
        console.log(task.slice(0, -3));
    })


    rl.question('Enter taskNumber: ', (taskNumber) => {
        rl.close();
        require(`${folderPath}/${user}/${taskNumber}`);
    }, user);
});

