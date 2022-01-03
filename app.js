let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber];
}

function converttoLetter (letter) {
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    else  return "Scissors"
}

function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    userScore++;
    userScore_span.innerHTML= userScore;
    computerScore_span.innerHTML = computerScore
    document.getElementById(userChoice).classList.add('green-blink')
    result_p.innerHTML = `${converttoLetter(userChoice)}(user) beats ${converttoLetter(computerChoice)}(comp), You win`;
    setTimeout (() => userChoice_div.classList.remove('green-blink'), 350);
}



function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${converttoLetter(computerChoice)}(computer) beats ${converttoLetter(userChoice)}(user), You lose`;
    document.getElementById(userChoice).classList.add('red-blink')
    setTimeout (() => userChoice_div.classList.remove('red-blink'), 350);
}

function draw(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice)
   result_p.innerHTML = `${converttoLetter(userChoice)} equals ${converttoLetter(computerChoice)}`
   document.getElementById(userChoice).classList.add('grey-blink')
   setTimeout (() => userChoice_div.classList.remove('grey-blink'), 350);
}


function game(userChoice) {
   const computerChoice = getComputerChoice();
   switch (userChoice + computerChoice) {
       case "rs":
       case "pr":
       case "sp":
           win(userChoice, computerChoice);
           break
       case "rp":
       case "ps":
       case "sr":
           lose(userChoice, computerChoice);
           break;
       case "pp":
       case "ss":
       case "rr":
           draw(userChoice, computerChoice);
           break;
   }
}

game("c");

function main() {
rock_div.addEventListener('click', function() {
    game("r");
})

paper_div.addEventListener('click', function() {
    game("p");
})

scissors_div.addEventListener('click', function() {
    game("s");
}) 
}

main();