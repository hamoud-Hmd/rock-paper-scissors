

//return (paper, rock or scissors)
function getComputerChoice() {

    // return a number from 1 to 3
    let randomNum = Math.floor(Math.random() * 3);
    const choices = ["Paper","Rock","Scissors"];

    return choices[randomNum];

}

console.log(getComputerChoice());