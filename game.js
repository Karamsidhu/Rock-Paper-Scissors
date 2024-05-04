let humanScore = 0; 
let computerScore = 0;


function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 1) {
        return "rock"
    } else if (rand == 0) {
        return "paper"
    } else {
        return "scissors"
    }
}



function getHumanChoice() {
    let input = prompt("1:Rock, 2:Paper, 3:Scissors\n Input a numeric value:");

    return input
}


function helper_coding(choice) {
    if (choice == "rock") {
        return 1        
    } else if (choice == "paper") {
        return 2
    } else {
        return 3
    }
}


function playRound(human, computer) {
    if (human == 1 && computer == 3) {
        console.log("You Win! Paper beats Rock.")
        ++humanScore;
    } else if (human == 1 && computer == 2) {
        console.log("You Lose! Rock beats Paper.")
        ++computerScore;
    } else if (human == 1 && computer == 1) {
        console.log("Tie Game! Rock Stalemate.")
    
    } else if (human == 2 && computer == 1) {
        console.log("You Lose! Paper beats Rock.")
        ++computerScore;
    }  else if (human == 2 && computer == 2) {
        console.log("Tie Game! Paper Stalemate.")
    } else if (human == 3 && computer == 2) {
        console.log("You Win! Scissors beats Paper.")
        ++humanScore;
    
    } else if (human == 3 && computer == 1) {
        console.log("You Lose! Rock beats Scissors.")
    } else if (human == 3 && computer == 2) {
        console.log("You Win! Scissors beats Paper.")
    } else if (human == 3 && computer == 3) {
        console.log("Tie Game! Scissors Stalemate.")
    } 
}


function playGame() {

    let humanSelect = helper_coding(getHumanChoice());
    let computerSelect = helper_coding(getComputerChoice());
    playRound(humanSelect, computerSelect);

    humanSelect = helper_coding(getHumanChoice());
    computerSelect = helper_coding(getComputerChoice());
    playRound(humanSelect, computerSelect);

    humanSelect = helper_coding(getHumanChoice());
    computerSelect = helper_coding(getComputerChoice());
    playRound(humanSelect, computerSelect);

    humanSelect = helper_coding(getHumanChoice());
    computerSelect = helper_coding(getComputerChoice());
    playRound(humanSelect, computerSelect);

    humanSelect = helper_coding(getHumanChoice());
    computerSelect = helper_coding(getComputerChoice());
    playRound(humanSelect, computerSelect);

    if (humanScore > computerScore) {
        console.log("You Won more rounds!")
    } else if (humanScore == computerScore) {
        console.log("Tie game! Stalemate!")
    } else {
        console.log("You Lost more rounds!")
    }
}

playGame();