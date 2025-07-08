let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
//console.log(choices);
const msg = document.querySelector("#msg");
const UserScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp_score");
const choiseMsgUser = document.querySelector("#msgChoiceUser");
const choiseMsgComp = document.querySelector("#msgChoiceCopm");
const genCompChoice = () => {
    let option = ["rock", "paper", "scissors"];
    let randoIdx = Math.floor(Math.random() * 3);

    return option[randoIdx];
}
const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        UserScorePara.innerText = userScore;
        //console.log("You Win...");
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        choiseMsgUser.style.backgroundColor = "green";
        choiseMsgComp.style.backgroundColor = "red";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        //console.log("You lose...")
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
        choiseMsgUser.style.backgroundColor = "red";
        choiseMsgComp.style.backgroundColor = "green";
    }
}

const playGame = (userChoice) => {
    //console.log("User choice =", userChoice);
    choiseMsgUser.innerText = `User choice  =   ${userChoice}`;
    //genrate computer choice
    const compChoice = genCompChoice();
    //console.log("Comp choice =", compChoice);
    choiseMsgComp.innerText = `Comp choice  =   ${compChoice}`;
    if (userChoice === compChoice) {
        //console.log("Game was draw.");
        msg.innerText = "Game was draw.";
        msg.style.backgroundColor = "#081b31";
        choiseMsgUser.style.backgroundColor = "#081b31";
        choiseMsgComp.style.backgroundColor = "#081b31";
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("Choice was Clicked", userChoice);
        playGame(userChoice);
    });
});