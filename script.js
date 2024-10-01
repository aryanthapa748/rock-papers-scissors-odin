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

// 2) Declare the players score variables TO KEEP TRACK OF THE SCORES
let humanScore = 0;
let computerScore = 0;

// 3) GETTING SELECTION FROM THE USER VIA ONCLICK

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', function(){
    playGame('Rock');
});

paperButton.addEventListener('click', function(){
    playGame('Paper');
});

scissorsButton.addEventListener('click', function(){
    playGame('Scissors');
});


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
function playGame(playerSelection){
    const humanSelection = playerSelection;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
    const result = document.querySelector('.result');
    result.textContent = `You chose ${humanSelection}. Computer chose ${computerSelection}.`;

    const score = document.querySelector('.score');
    score.textContent = ` Your Score: ${humanScore}. Computer Score ${computerScore}`;

    const final = document.querySelector('.final');
    
    // Declare the winner after 5 rounds
    if (humanScore === 5 || computerScore == 5){
        if( humanScore > computerScore){
        score.textContent = '';
        final.textContent = ` Congrats !! You won this round! Final Score: You = ${humanScore}, Computer = ${computerScore}`;
    } else if (humanScore < computerScore){
        score.textContent = '';
        final.textContent = `Oops ! You lost this round! Final Score: You = ${humanScore}, Computer = ${computerScore}`;
    } else {
        score.textContent = '';
        final.textContent = `It's a tie! Final Score: You = ${humanScore}, Computer = ${computerScore}`; 
    }     
    humanScore = 0;
    computerScore = 0;
    final.textContent = ''; // Resetting after the final result is displayed
    }
}
