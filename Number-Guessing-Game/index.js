import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
function genrateRandomNumber() {
    return Math.floor(Math.random() * 10);
}
async function playGame() {
    let computerGenratedNumber = genrateRandomNumber();
    console.log(computerGenratedNumber);
    // type ansType = {
    //     GuessingNumber:number
    // }
    while (true) {
        const answers = await inquirer.prompt([
            {
                type: "number",
                name: "GuessingNumber",
                message: "Enter Your Number"
            }
        ]);
        // console.log(answers.GuessingNumber);
        const { GuessingNumber } = answers;
        if (parseInt(GuessingNumber) === computerGenratedNumber) {
            const winMessage = "Your Guess Answer is correct\nYou Win Congratulations";
            chalkAnimation.rainbow(winMessage).start();
            break; // terminate the task 
        }
        else {
            const loseMessage = "Sorry, Please Try Again. Better luck Next time. Your Guess is wrong";
            chalkAnimation.pulse(loseMessage).start();
        }
        console.log(GuessingNumber, "Guess Number", computerGenratedNumber, "System Output");
    }
}
playGame();
