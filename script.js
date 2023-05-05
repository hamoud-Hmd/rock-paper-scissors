


function game() {

    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();



    console.log(playRound(playerSelection,computerChoice))

}

// to return the winner
function playRound(playerSelection, computerChoice) {

    let message = `There is a Tie both player chose ${playerSelection}`;
    if(playerSelection != computerChoice) {
        if(playerSelection === "rock" && computerChoice === "paper") {
                message = "You Lose! Paper beats Rock ";
        }else if(playerSelection === "scissors" && computerChoice === "rock") {
                message = "You Lose! Rock beats Scissors";
        }else if(playerSelection === "paper" && computerChoice === "scissors") {
                message = "You Lose! Scissors beat Paper";
        }else {
                message = "You win!";
        }
    }

    return message;
  }

// to get and return the player choice
function getPlayerChoice() {
    let validChoice = false;
    let choice = prompt('Please choose "Rock, Paper, or Scissors" to begin the game!').toLowerCase();


    while(!validChoice) {
       
        if(["rock","paper","scissors"].includes(choice)) {
            console.log(`Player choice is "${choice}"`)
            validChoice = true;
        }else{
            choice = prompt("Please insert it again, you can check your spelling").toLowerCase();
        }

    }

    return choice;
    
}

//return (paper, rock or scissors)
function getComputerChoice() {

    // return a number from 1 to 3
    let randomNum = Math.floor(Math.random() * 3);
    const choices = ["paper","rock","scissors"];

    console.log(`Computer choice is "${choices[randomNum]}"`)
    return choices[randomNum];

}

