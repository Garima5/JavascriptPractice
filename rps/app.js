console.log("Working!!")
//variables
const userChoiceDisply = document.getElementById("userchoice");
const computerChoiceDisplay = document.getElementById("computerchoice");
const resultDisplay = document.getElementById("result");
const selectionChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let resultText;
console.log(selectionChoices)

selectionChoices.forEach(choicemade => choicemade.addEventListener('click',(e)=>{
    console.log("Clicked");
    userChoice= e.target.id;
    console.log(userChoice);
    userChoiceDisply.innerHTML = userChoice;
    computerChoicefunc();
    result();
}));



function computerChoicefunc(){
    let randomChoice = Math.floor(Math.random()*3) + 1;
    computerChoice=randomChoice;
    let randomChoiceGame;
    if (randomChoice === 1){
        randomChoiceGame = "rock";

    }
    if (randomChoice === 2){
        randomChoiceGame = "paper";

    }
    if (randomChoice === 3){
        randomChoiceGame = "scissors";

    }

    computerChoiceDisplay.innerHTML=randomChoiceGame;

}

function result(){


    if (computerChoice === 1 && userChoice === 'paper'){
        resultText = 'You Won';
    }
    if (computerChoice === 1 && userChoice === 'scissors'){
        resultText = 'You lost';
    }
    if (computerChoice === 1 && userChoice === 'rock'){
        resultText = 'Game is a draw';
    }
    if (computerChoice === 2 && userChoice === 'rock'){
        resultText = 'You lost';
    }
    if (computerChoice === 2 && userChoice === 'scissors'){
        resultText = 'You Won';
    }
    if (computerChoice === 2 && userChoice === 'paper'){
        resultText = 'Game is a draw';
    }
    if (computerChoice === 3 && userChoice === 'paper'){
        resultText = 'You lost';
    }
    if (computerChoice === 3 && userChoice === 'rock'){
        resultText = 'You Won';
    }
    if (computerChoice === 3 && userChoice === 'scissors'){
        resultText = 'Game is a draw';
    }
    resultDisplay.innerHTML=resultText;

}
