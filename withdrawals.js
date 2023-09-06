import inquirer from "inquirer";
import { currentBalUser1 } from "./test.js";
import { userFirst } from "./users.js";
export async function repeat() {
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
    }
}
export async function repeat1() {
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
}
