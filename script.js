let valid = ["rock", "paper", "sissor"];
let human_score = 0;
let comp_score = 0;

const par = document.querySelector(".para");
const won = document.querySelector(".won");

function getComputerChoice() {
    return valid[Math.floor(Math.random() * 3)];
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sissor = document.querySelector("#sissor");
rock.addEventListener("click", () => {
    handleClick("rock");
});
paper.addEventListener("click", () => {
    handleClick("paper");
});
sissor.addEventListener("click", () => {
    handleClick("sissor");
});

function handleClick(player_selection) {
    if (human_score >= 5 || comp_score >= 5) {
        won.innerText = `GAME OVER ${human_score >= 5 ? "player" : "computer"} has won`;
        return ;
    }
    playRound(player_selection, getComputerChoice());
    console.log(human_score, comp_score);
    par.innerText = `Human Score: ${human_score} Computer Score: ${comp_score} `;

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == undefined) {
        par.innerText = "enter a valid value";
        return;
    }
    if (humanChoice == computerChoice) {
        par.innerText = "Draw";
        return;
    }
    if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            comp_score++;
        } else {
            human_score++;
        }
    }
    if (humanChoice == "sissor") {
        if (computerChoice == "rock") {
            comp_score++;
        } else {
            human_score++;
        }
    }
    if (humanChoice == "paper") {
        if (computerChoice == "sissor") {
            comp_score++;
        } else {
            human_score++;
        }
    }
    console.log(humanChoice, computerChoice);
    return;
}



