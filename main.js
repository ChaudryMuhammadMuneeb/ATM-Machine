import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 4256; //Pincode
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your Pin Number:",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin Code Matched!");
    let operationsAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Operation",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        }
    ]);
    if (operationsAnswer.operation === "Withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Amount to Withdraw",
                type: "number"
            }
        ]);
        if (myBalance > amountAnswer.amount) {
            myBalance -= amountAnswer.amount;
            console.log(`Your Remaining Balance is ${myBalance}`);
        }
        else {
            console.log("Insufficient balance");
        }
    }
    else if (operationsAnswer.operation === "Check Balance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code. ATM Blocked. Please Try again later.");
}
