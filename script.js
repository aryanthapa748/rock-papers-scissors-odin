// 1) GENERATING RANDOM SELECTION FROM COMPUTER
function getComputerChoice(){        
    let randomNum = Math.floor(Math.random() * 3);

    if(randomNum === 0){
        return  'Rock';
    } else if (randomNum === 1){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

// 2) GETTING SELECTION FROM THE USER VIA PROMPT
function getHumanChoice(){
    return prompt('Please choose between Rock, Paper and Scissors !', '');
}

// 3) Declare the players score variables TO KEEP TRACK OF THE SCORES
let humanScore = 0;
let computerScore = 0;

// 4) Logic to play a single round
function playRound(humanChoice, computerChoice){

    if (humanChoice === 'Rock' && computerChoice === 'Paper' ||
        humanChoice === 'Paper' && computerChoice === 'Scissors' ||
        humanChoice === 'Scissors' && computerChoice === 'Rock'
    ){
        computerScore++;
        return 'Computer wins this round';

    } else if ( humanChoice === 'Rock' && computerChoice === 'Scissors' ||
                humanChoice === 'Paper' && computerChoice === 'Rock' ||
                humanChoice === 'Scissors' && computerChoice === 'Paper'
    ){
       humanScore++;
       return 'You win this round';
        
    } else {
        return `It's a tie ! Both choosed ${humanChoice}`
    }
}

// 5) function to play 5 rounds of game and declare a winner at the end
function playGame(){
    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    console.log(playRound(humanSelection1, computerSelection1));
    console.log(`Round 1: You chose ${humanSelection1}. Your Score = ${humanScore}`);
    console.log(`Computer chose ${computerSelection1}. Computer Score = ${computerScore}`);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    console.log(playRound(humanSelection2, computerSelection2));
    console.log(`Round 2: You chose ${humanSelection2}. Your Score = ${humanScore}`);
    console.log(`Computer chose ${computerSelection2}. Computer Score = ${computerScore}`);

    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    console.log(playRound(humanSelection3, computerSelection3));
    console.log(`Round 3: You chose ${humanSelection3}. Your Score = ${humanScore}`);
    console.log(`Computer chose ${computerSelection3}. Computer Score = ${computerScore}`);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    console.log(playRound(humanSelection4, computerSelection4));
    console.log(`Round 4: You chose ${humanSelection4}. Your Score = ${humanScore}`);
    console.log(`Computer chose ${computerSelection4}. Computer Score = ${computerScore}`);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    console.log(playRound(humanSelection5, computerSelection5));
    console.log(`Round 5: You chose ${humanSelection5}. Your Score = ${humanScore}`);
    console.log(`Computer chose ${computerSelection5}. Computer Score = ${computerScore}`);

    // Declare the winner after 5 rounds
    if (humanScore > computerScore){
        return `You won the game! Final Score: You = ${humanScore}, Computer = ${computerScore}`;
    } else if (humanScore < computerScore){
        return `You lost the game! Final Score: You = ${humanScore}, Computer = ${computerScore}`;
    } else {
        return `It's a tie! Final Score: You = ${humanScore}, Computer = ${computerScore}`;
    }     
}

console.log(playGame());