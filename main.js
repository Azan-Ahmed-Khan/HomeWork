import inquirer from "inquirer";
import { userFirst } from "./users.js";
import { userSecond } from "./users.js";
let stepFirst = await inquirer.prompt([{
        name: "userlogin",
        type: "string",
        message: "\nPlease Enter Your User Name\n"
    },
    {
        name: "passPin",
        type: "number",
        message: "\nPlease Enter Your Pin Code\n"
    }]);
if (stepFirst.userlogin.toLocaleLowerCase() == userFirst.name.toLocaleLowerCase() && stepFirst.passPin == userFirst.pass) {
    console.log(`\nWellcome Mr. ${userFirst.name.toLocaleUpperCase()}\n`);
    // stepSecond
    let stepSecond = await inquirer.prompt({
        name: "Account1",
        type: "list",
        choices: [("Current Balance"), ("Withdrawal"), ("Deposit")],
        message: "\nPlease Select the Desire Option\n"
    });
    if (stepSecond.Account1 == "Current Balance") {
        console.log("\nYour Current Balance is Rs. 1,500/-\n");
    }
}
else if (stepFirst.userlogin.toLocaleLowerCase() == userSecond.name.toLocaleLowerCase() && stepFirst.passPin == userSecond.pass) {
    console.log(`\nWellcome Mr. ${userSecond.name.toLocaleUpperCase()}\n`);
    let stepSecond = await inquirer.prompt({
        name: "Account2",
        type: "list",
        choices: [("Current Balance"), ("Withdrawal"), ("Deposit")],
        message: "\nPlease Select the Desire Option\n"
    });
    if (stepSecond.Account2 == "Current Balance") {
        console.log("\nYour Current Balance is Rs. 5,000/-\n");
    }
    // stepSecond
}
else {
    console.log("You Enter the Wrong Detail");
}
