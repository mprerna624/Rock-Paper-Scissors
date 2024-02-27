const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    
    if(randomNumber === 0) return "rock";
    else if(randomNumber === 1) return "paper";
    else if(randomNumber === 2) return "scissors";

};

function playRound(playerSelection, computerSelection) {

    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            scoreMsg.innerText = "It's a Draw !";
        } 
        else if(computerSelection === "paper") {
            scoreMsg.innerText = "You Lose! Paper beats Rock";
            compScore++;
        }
        else if(computerSelection === "scissors") {
            scoreMsg.innerText = "You Win! Rock beats Scissors";
            playerScore++;
        }
    }

    else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            scoreMsg.innerText = "You Win! Paper beats Rock";
            playerScore++;
        } 
        else if(computerSelection === "paper") {
            scoreMsg.innerText = "It's a Draw !";
        }
        else if(computerSelection === "scissors") {
            scoreMsg.innerText = "You Lose! Scissors beat Paper";
            compScore++;
        }
    }

    else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            scoreMsg.innerText = "You Lose! Rock beats Scissors";
            compScore++;
        } 
        else if(computerSelection === "paper") {
            scoreMsg.innerText = "You Win! Scissors beat Paper";
            playerScore++;
        }
        else if(computerSelection === "scissors") {
            scoreMsg.innerText = "It's a Draw !";
        }
    }

    pScoreVal.innerText = playerScore;
    cScoreVal.innerText = compScore;

}

function playGame(e) {
    let playerSelection = e.target.className;
    let computerSelection = getComputerChoice();

    //Icon Change
    let pIcon = document.getElementById("p-icon");
    let cIcon = document.getElementById("c-icon");

    if(playerSelection === "rock") pIcon.innerText = "👊";
    else if(playerSelection === "paper") pIcon.innerText = "✋";
    else if(playerSelection === "scissors") pIcon.innerText = "✌";

    
    if(computerSelection === "rock") cIcon.innerText = "👊";
    else if(computerSelection === "paper") cIcon.innerText = "✋";
    else if(computerSelection === "scissors") cIcon.innerText = "✌";

    // Updates Score Message & Score Value
    playRound(playerSelection, computerSelection);

    //Game End Scenario
    if(playerScore === 5 || compScore === 5) {
        let mainTitle = document.querySelector(".main-title");
        mainTitle.innerText = "Game Ended !!!";

        btnArr.forEach((button) => {
            button.removeEventListener('click', playGame)
        });

        let dialogBox = document.getElementById("dialogBox");
        let dialogTitle = document.getElementById("dialogTitle");
        dialogBox.showModal();

        if(playerScore === 5) {
            scoreMsg.innerText = "Congratulations!! You WON!";
            mainTitle.style.color = "green";
            scoreMsg.style.color = "green";

            dialogTitle.innerText = "Congratulations!! You WON!";
        }

        else {
            scoreMsg.innerText = "You LOSE! Better Luck Next Time!";
            mainTitle.style.color = "red";
            scoreMsg.style.color = "red";

            dialogTitle.innerText = "You LOSE! Better Luck Next Time!";

        }
    }
}

//function game
let playerScore = 0; 
let compScore = 0;
let pScoreVal = document.getElementById("p-score-val");
let cScoreVal = document.getElementById("c-score-val");
let scoreMsg = document.getElementById("score-msg");
let buttons = document.getElementsByTagName("button");
let btnArr = Array.from(buttons);
btnArr.forEach((button) => {button.addEventListener('click', playGame)});

document.getElementById("playAgain").removeEventListener("click", playGame);
document.getElementById("playAgain").addEventListener("click",() => {
    document.getElementById("dialogBox").close();

    //now to restart game
    playerScore = compScore = 0;
    pScoreVal.innerText = cScoreVal.innerText = 0;
    document.getElementById("p-icon").innerText = document.getElementById("c-icon").innerText = "❔";
    document.querySelector(".main-title").style.color = "#ddd";
    scoreMsg.style.color = "#ddd";
    document.querySelector(".main-title").innerText = "Choose your Weapon";
    scoreMsg.innerText = "First to score 5 points wins the game";

    btnArr.forEach((button) => {button.addEventListener('click', playGame)});
    document.getElementById("playAgain").removeEventListener("click", playGame);
});




// function game() {
//     for(let i = 1; i<=5; i++) {
//         const computerSelection = getComputerChoice();
//         const playerSelection = prompt("What do you choose : Rock, Paper, Scissors ?", "rock"); 
//         playRound(playerSelection.toLowerCase(), computerSelection);
//     }
    
//     console.log(" ------ GAME ENDED !!! ------");

//     if(playerScore > compScore) {
//         console.log("Congratulations!! You WON!")
//     } 
//     else if(playerScore < compScore) {
//         console.log("You LOSE! Better Luck Next Time!");
//     }
//     else {
//         console.log("Its a Draw Match!!");
//     }
// }