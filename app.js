let playerSelection;
let computerSelection;

let playerWins = 0;
let computerWins = 0;
let ties = 0;

//Computer Selection
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;

    if (randomNumber == 1) {
        computerSelection = "rock";
    } 
    else if (randomNumber == 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    return computerSelection;
}

//Player choice Selection
function getPlayerChoice() {
    playerSelection = window.prompt("Choose: Rock, Paper or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
        playerSelection = window.prompt("Choose: Rock, Paper or Scissors?");
    }
    return playerSelection;
}


//Play Round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            console.log("Computer wins this round1 \n Paper beats Rock!!");
            computerWins++;
        }
        else if (computerSelection === "scissors"){
            console.log("You win this round1 \n Rock beats Scissors!!");
            playerWins++;
        }
        else {
            console.log("This round is a tie!");
            ties++;
        }
    }
    if (playerSelection === "paper"){
        if (computerSelection === "scissors"){
            console.log("Computer wins this round1 \n Scissors beats Paper!!");
            computerWins++;
        }
        else if (computerSelection === "rock"){
            console.log("You win this round1 \n Paper beats Rock!!");
            playerWins++;
        }
        else {
            console.log("This round is a tie!");
            ties++;
        }
    }
    if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            console.log("Computer wins this round1 \n Rock beats Scissors!!");
            computerWins++;
        }
        else if (computerSelection === "paper"){
            console.log("You win this round1 \n Scissors beats Paper!!");
            playerWins++;
        }
        else {
            console.log("This round is a tie!");
            ties++;
        }
    }
}


//Play Game
function playGame() {
    for (i=1; i<=5; i++){
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);

        console.log("Round: ", i);
        console.log("Player \tVs\t Computer");
        console.log(playerSelection, "\tVs\t", computerSelection);
        console.log("--------------------------");
        console.log("Player Wins: ", playerWins);
        console.log("Computer Wins: ", computerWins);
        console.log("Ties: ", ties);
        console.log("\n");
    }
    if (computerWins > playerWins){
        console.log("Compueter beats player /t",computerWins,"\tto\t",playerWins);
    }
    else if (playerWins >computerWins) {
        console.log("Player beats computer /t",playerWins,"\tto\t",computerWins);
    }
    else{
        console.log("Its a tie with ", playerWins, " Player wins and ", computerWins," Computer Wins!!");
    }
    console.log("Game Over!!!!!")

    playerWins = 0;
    computerWins = 0;
    ties = 0;
}
 
playGame();

