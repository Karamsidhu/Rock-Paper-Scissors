let humanScore = 0; 
let computerScore = 0;

const dom = document.querySelector(".DOMdisplay");
const dom_text = document.querySelector(".DOMtext");
const dom_butt = document.querySelector(".DOMbutts");

let rock = document.createElement("button");
rock.textContent = "Rock";

let paper = document.createElement("button");
paper.textContent = "Paper";

let sciss = document.createElement("button");
sciss.textContent = "Scissors";


function playGame() {
    dom_text.removeChild(userScore);
    dom_text.removeChild(roboScore);

    dom_butt.removeChild(rock);
    dom_butt.removeChild(paper);
    dom_butt.removeChild(sciss);

    userScore = document.createElement("a");
    userScore.textContent = `User Score: ${humanScore}`;

    roboScore = document.createElement("a");
    roboScore.textContent = `Robo Score: ${computerScore}`;

    dom_text.appendChild(userScore);
    dom_text.appendChild(roboScore);

    dom_butt.appendChild(rock);
    dom_butt.appendChild(paper);
    dom_butt.appendChild(sciss);
}


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 1) {
        return 1
    } else if (rand == 0) {
        return 2
    } else {
        return 3
    }
}


function press(val) {
    let robo = getComputerChoice();

    switch (val) {
        case 1:
            if (robo == 1) {

            } else if (robo == 2) {
                ++computerScore;
            } else {
                ++humanScore;
            }
            playGame();
            break;

        case 2:
            if (robo == 1) {
                ++humanScore;
            } else if (robo == 2) {
                ++computerScore;
            } else {
                ++humanScore;
            }
            playGame();
            break;

        case 3:
            if (robo == 1) {
            } else if (robo == 2) {
                ++computerScore;
            } else {
                ++humanScore;
            }
            playGame();
            break;
    
        default:
            break;
    }
}

sciss.addEventListener("click", function() { press(3)} );
paper.addEventListener("click", function() { press(2)} );
rock.addEventListener("click",  function() { press(1)} );


let userScore = document.createElement("a");
userScore.textContent = `User Score: ${humanScore}`;

let roboScore = document.createElement("a");
roboScore.textContent = `Robo Score: ${computerScore}`;

dom_text.appendChild(userScore);
dom_text.appendChild(roboScore);

dom_butt.appendChild(rock);
dom_butt.appendChild(paper);
dom_butt.appendChild(sciss);


playGame();