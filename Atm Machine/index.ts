import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';


interface ansType{
    userId : string,
    userPin : number,
    accountType : string,
    transactionType: string,
    amount : number


    
}

const answers : ansType  = await inquirer.prompt([
    {
        type:"input",
        name : "userId",
        message:"Kinldy enter Your id "
    },
    {
        type:"input",
        name : "userPin",
        message:"Kinldy enter Your PIN"
    },
    {
        type:"list",
        name : "accountType",
        choices: ["Current" , "Saving"],
        message:"select your transaction",
        
     
    },
    {
        type:"list",
        name : "transactionType",
        choices: ["Fast Cash" , "withDraw"],
        message:"select your transaction",
        when(answers){
            return answers.accountType 
        }
     
    },
    {
        type:"list",
        name : "amount",
        choices: [500,1000,5000,10000,20000,30000],
        message:"select your transaction",
        when(answers){
            return answers.transactionType == "Fast Cash"
        }
     
    },
    {
        type:"number",
        name : "amount",
        message:"Enter Your Amount",
        when(answers){
            return answers.transactionType == "withDraw"
        }
     
    }
   
])
if(answers.userId && answers.userPin){
    const balance = Math.floor(Math.random()*10000000);
   console.log(balance)
    const EnteredAmount = answers.amount
    if(balance >= EnteredAmount){
     const remaining = balance - EnteredAmount;
    
 console.log("Your remaining amount is ", remaining);
     
    }
    else{
        console.log("Your Balance is insuffient")
    }
}

