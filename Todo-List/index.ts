import inquirer from "inquirer";
import chalkAnimation  from "chalk-animation";
import chalk from "chalk";

let todos : string[] = [];  // data
let loop : boolean = true; //check

while(loop){
    const answers:{
        TODO : string,
        addmore : boolean ,
     } = await inquirer.prompt([
        {
            type : "input",
            name : "TODO",
            message: chalk.yellow("what do you want to add in your todo?") //milkshake
        },
        {
            type : "confirm",
            name : "addmore",
            message : chalk.red("Do You Want to add more todo/things "),
            default : false
        },

    ])
    const {TODO,addmore} = answers;
    console.log(answers);
    loop = addmore;
    if(TODO){
        todos.push(TODO) 
    }
    else{
        console.log("kindly add a valid input ");
    }

}
// console.log(todos);
if (todos.length > 0 ){
    console.log("Your Todos List :")
     todos.forEach(element => {
        console.log(chalk.green(element))
     });
}
else{
    console.warn("todos not found");
}
