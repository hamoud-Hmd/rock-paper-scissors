const gameButtons = document.querySelectorAll('.game-btn');
const playerBoard = document.querySelector(".player-score");
const computerBoard = document.querySelector(".computer-score");
const displayWinner = document.querySelector(".display-winner");
let playerScore = 0, computerScore = 0, round = 1;


gameButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let winner = playRound(btn.value, getComputerChoice());
        if(winner == "You") {
            playerScore++;
            playerBoard.innerHTML = playerScore;
            round++;
        }else if(winner == "Computer") {
            computerScore++;
            computerBoard.innerHTML = computerScore;
            round++;
        }
        

        if(playerScore >= 5 ) {
            displayWinner.innerHTML = "Congrats you won!";
            init();

        }
        if(computerScore >= 5 ) {
            displayWinner.innerHTML = "We are sorry, You lost!";
            init();
        }
    })
});

function game() {

    let playerScore = 0, computerScore = 0;
    let round = 0;

    // while(round < 5) {

    //     const playerSelection = getPlayerChoice();
    //     const computerChoice = getComputerChoice();

    //     let winner = playRound(playerSelection,computerChoice);
    //     if(winner == "You") {
    //         playerScore++;
    //     }else if(winner == "Computer") {
    //         computerScore++;
    //     }

    //     round++;
    //     console.log("W: ", winner, " R: ",round," P: ", playerScore," C: ", computerScore); 
    // }

    // if(playerScore == computerScore) {
    //     alert("There is a tie");
    // }else if(playerScore < computerScore) {
    //     alert("The computer won");
    // }else{
    //     alert("Congrats, you won!");
    // }


    

}

// to return the winner
function playRound(playerSelection, computerChoice) {
    
    let winner = "Tie";
    let message = `There is a Tie both player chose ${playerSelection}`;
    if(playerSelection != computerChoice) {
        if(playerSelection === "rock" && computerChoice === "paper") {
                message = "You Lose! Paper beats Rock ";
                winner = "Computer";
                console.log(message)
        }else if(playerSelection === "scissors" && computerChoice === "rock") {
                message = "You Lose! Rock beats Scissors";
                winner = "Computer";
                console.log(message)
        }else if(playerSelection === "paper" && computerChoice === "scissors") {
                message = "You Lose! Scissors beat Paper";
                winner = "Computer";
                console.log(message)
        }else {
                message = "You win!";
                winner = "You";
                console.log(message)
        }
    }
    console.log("Round Number: ", round)
    return winner;
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


function init() {
    playerScore = 0;
    computerScore = 0;
    
}




