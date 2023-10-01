import inquirer from "inquirer";
import chalk from "chalk";
let Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answers = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: chalk.bgGray(["PKR", "USD", "GBP"]),
        message: "select Your currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "select Your Converstion currency"
    },
    {
        type: "number",
        name: "amount",
        message: "select Your Converstion amount"
    },
]);
const { from, to, amount } = answers;
if (from && to && amount) {
    const ConvertedAmount = Conversion[from][to] * amount;
    console.log(`Your Conversion amount ${from} to ${to} is ${amount}`);
}
else {
    console.log("Invalid inputs");
}
