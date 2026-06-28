let valid = ["rock", "paper", "sissor"];
let human_score = 0;
let comp_score = 0;

const button = document.querySelector("#but1");
const par = document.querySelector(".para");

function getComputerChoice() {
    return valid[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let sign = prompt("enter").toLowerCase();
    if (!valid.includes(sign)){
        par.innerText = "enter a valid value";
        return;
    }
    return sign;
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



button.addEventListener("click", () =>{
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(human_score, comp_score);
        par.innerText = `Human Score: ${human_score} Computer Score: ${comp_score} `;
    }
});

