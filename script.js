
const rock = document.querySelector(".CardRock");
const user = document.querySelector(".YouWin");
const score = document.querySelector(".score");
const userScoreText = document.querySelector(".UserScore");
const computerScoreText = document.querySelector(".ComputerScore");

let userScore = 0;
let computerScore = 0;
let history = {
    rock: 0,
    paper: 0,
    scissors: 0,
};
rock.addEventListener("click", () => {
    console.log("rock clicked");
    const userChoice = "rock";
    history[userChoice]++;
    user.style.backgroundImage = 'url("rock.png")';
    const option = ["rock", "paper", "scissors"];
    let computerChoice;
    if (history.rock > history.paper && history.rock > history.scissors) {
        computerChoice = "paper";
    }
    else if (history.paper > history.rock && history.paper > history.scissors) {
        computerChoice = "scissors";
    }
    else if (history.scissors > history.rock && history.scissors > history.paper) {
        computerChoice = "rock";
    }
    else {
        const options = ["rock", "paper", "scissors"];
        const randomNumber = Math.floor(Math.random() * 3);
        computerChoice = options[randomNumber];
    }
    score.innerText = "COMPUTER THINKING...";
    score.style.color = "white";
    setTimeout(() => {

        if (userChoice === computerChoice) {
            score.innerText = "DRAW!";
            score.style.color = "#ff9100";
        }
        else if (
            userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper"
        ) {
            score.innerText = "YOU WIN!";
            score.style.color = "lime";
            userScore++;
            userScoreText.innerText = userScore;


        }
        else {
            score.innerText = "COMPUTER WIN!";
            score.style.color = "#ff3131";
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
        if (userScore === 5) {
            alert("YOU WON THE GAME!");
        }

        if (computerScore === 5) {
            alert("COMPUTER WON THE GAME!");
        }
        const computer = document.querySelector(".ComputerWin");
        computer.style.backgroundImage = `url("${computerChoice}.png")`;
    }, 2000);
});
const paper = document.querySelector(".CardPaper");

paper.addEventListener("click", () => {
    console.log("paper clicked");
    const userChoice = "paper";
    history[userChoice]++;
    user.style.backgroundImage = 'url("paper.png")';
    const option = ["rock", "paper", "scissors"];
    let computerChoice;
    if (history.rock > history.paper && history.rock > history.scissors) {
        computerChoice = "paper";
    }
    else if (history.paper > history.rock && history.paper > history.scissors) {
        computerChoice = "scissors";
    }
    else if (history.scissors > history.rock && history.scissors > history.paper) {
        computerChoice = "rock";
    }
    else {
        const randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        computerChoice = option[randomNumber];
    }
    score.innerText = "COMPUTER THINKING...";
    score.style.color = "white";
    setTimeout(() => {

        console.log(computerChoice);
        if (userChoice === computerChoice) {
            score.innerText = "DRAW!";
            score.style.color = "#ff9100";
        }
        else if (
            userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper"
        ) {
            score.innerText = "YOU WIN!";
            score.style.color = "lime";
            userScore++;
            userScoreText.innerText = userScore;
        }
        else {
            score.innerText = "COMPUTER WIN!";
            score.style.color = "#ff3131";
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
        if (userScore === 5) {
            alert("YOU WON THE GAME!");
        }

        if (computerScore === 5) {
            alert("COMPUTER WON THE GAME!");
        }
        const computer = document.querySelector(".ComputerWin");
        computer.style.backgroundImage = `url("${computerChoice}.png")`;

    }, 2000)
});
const scissors = document.querySelector(".CardScissors");

scissors.addEventListener("click", () => {
    console.log("scissors clicked");
    const userChoice = "scissors";
    history[userChoice]++;
    user.style.backgroundImage = 'url("scissors.png")';
    const option = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(randomNumber);
    score.innerText = "COMPUTER THINKING...";
    score.style.color = "white";
    setTimeout(() => {


        let computerChoice;
        if (history.rock > history.paper && history.rock > history.scissors) {
            computerChoice = "paper";
        }
        else if (history.paper > history.rock && history.paper > history.scissors) {
            computerChoice = "scissors";
        }
        else if (history.scissors > history.rock && history.scissors > history.paper) {
            computerChoice = "rock";
        }
        else {
            computerChoice = option[randomNumber];
        }
        if (userChoice === computerChoice) {
            score.innerText = "DRAW!";
            score.style.color = "#ff9100";
        }
        else if (
            userChoice === "rock" && computerChoice === "scissors" ||
            userChoice === "paper" && computerChoice === "rock" ||
            userChoice === "scissors" && computerChoice === "paper"
        ) {
            score.innerText = "YOU WIN!";
            score.style.color = "#39ff14";
            userScore++;
            userScoreText.innerText = userScore;


        }
        else {
            score.innerText = "COMPUTER WIN!";
            score.style.color = "#ff3131";
            computerScore++;
            computerScoreText.innerText = computerScore;
        }
        if (userScore === 5) {
            alert("YOU WON THE GAME!");
        }

        if (computerScore === 5) {
            alert("COMPUTER WON THE GAME!");
        }
        const computer = document.querySelector(".ComputerWin");
        computer.style.backgroundImage = `url("${computerChoice}.png")`;

    }, 2000)
});
const restart = document.querySelector(".restart");

restart.addEventListener("click", () => {
    location.reload();
});
