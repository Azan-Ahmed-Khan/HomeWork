import inquirer from "inquirer";
import { userFirst } from "./users.js";
import { userSecond } from "./users.js";
import { repeat, repeat1 } from "./withdrawals.js";
export let currentBalUser1 = 1500;
export let currentBalUser2 = 5000;
let stepFirst = await inquirer.prompt([{
        name: "userlogin",
        type: "string",
        message: "\nPlease Enter Your User Name\n"
    },
    {
        name: "passPin",
        type: "number",
        message: "\nPlease Enter Your Pin Code\n"
    },
]);
if (stepFirst.userlogin.toLocaleLowerCase() == userFirst.name.toLocaleLowerCase() && stepFirst.passPin == userFirst.pass) {
    console.log(`\nWellcome Mr. ${userFirst.name.toLocaleUpperCase()}\n`);
    let stepSecond = await inquirer.prompt({
        name: "Account1",
        type: "list",
        choices: [("Current Balance"), ("Withdrawal"), ("Deposit")],
        message: "\nPlease Select the Desire Option\n"
    });
    if (stepSecond.Account1 == "Current Balance") {
        console.log(`\nYour Current Balance is Rs. ${currentBalUser1}\n`);
        let lastQuest = await inquirer.prompt({
            name: "lastQuestion",
            type: "list",
            choices: [("Yes"), ("No")],
            message: "Do you want to make another transaction?"
        });
        if (lastQuest.lastQuestion == "Yes") {
            repeat();
        }
        else if (lastQuest.lastQuestion == "No") {
            console.log("\n\nThank You, Have a Good Time\n");
        }
    }
    else if (stepSecond.Account1 == "Withdrawal") {
        let withdraw = await inquirer.prompt({
            name: "azanWithdrawal",
            type: "number",
            message: "\nPlease Enter the Amount to Withdrawal\n"
        });
        console.log(`\nYour Amount of Rs. ${withdraw.azanWithdrawal} has been withdrawal successfully.\n`);
        currentBalUser1 -= withdraw.azanWithdrawal;
        console.log(`\nYour Current Balance is Rs. ${currentBalUser1}.\n`);
        let lastQuest = await inquirer.prompt({
            name: "lastQuestion",
            type: "list",
            choices: [("Yes"), ("No")],
            message: "Do you want to make another transaction?"
        });
        if (lastQuest.lastQuestion == "Yes") {
            repeat1();
        }
        else if (lastQuest.lastQuestion == "No") {
            console.log("\n\nThank You, Have a Good Time\n");
        }
    }
    else if (stepSecond.Account1 == "Deposit") {
        let deposit = await inquirer.prompt({
            name: "azanDeposit",
            type: "number",
            message: "\nPlease Enter the Amount for Deposit\n"
        });
        console.log(`\nYour Amount of Rs. ${deposit.azanDeposit} has been deposited successfully.\n`);
        currentBalUser1 += deposit.azanDeposit;
        console.log(`\nYour Current Balance after Deposit is Rs. ${currentBalUser1}.\n`);
        let lastQuest = await inquirer.prompt({
            name: "lastQuestion",
            type: "list",
            choices: [("Yes"), ("No")],
            message: "Do you want to make another transaction?"
        });
        if (lastQuest.lastQuestion == "Yes") {
            repeat();
        }
        else if (lastQuest.lastQuestion == "No") {
            console.log("\n\nThank You, Have a Good Time\n");
        }
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
        console.log(`\nYour Current Balance is Rs. ${currentBalUser2}\n`);
    }
    else if (stepSecond.Account2 == "Withdrawal") {
        let withdraw = await inquirer.prompt({
            name: "ubaidWithdrawal",
            type: "number",
            message: "\nPlease Enter the Amount to Withdrawal\n"
        });
        console.log(`\nYour Amount of Rs. ${withdraw.ubaidWithdrawal} has been withdrawal successfully.\n`);
        currentBalUser2 -= withdraw.ubaidWithdrawal;
        console.log(`\nYour Current Balance is Rs. ${currentBalUser2}.\n`);
    }
    else if (stepSecond.Account2 == "Deposit") {
        let deposit = await inquirer.prompt({
            name: "ubaidDeposit",
            type: "number",
            message: "\nPlease Enter the Amount for Deposit\n"
        });
        console.log(`Your Amount of Rs. ${deposit.ubaidDeposit} has been deposited successfully\n `);
        currentBalUser2 += deposit.ubaidDeposit;
        console.log(`Your Current Balance after Deposit is Rs. ${currentBalUser2}\n`);
    }
}
else {
    console.log("You Entered the Wrong Detail");
}
