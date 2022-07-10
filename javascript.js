let comp, player, compWins = 0, playerWins = 0;


function computerPlay() {
    let randNum = Math.floor(Math.random()*100 + 1);
    
    if (randNum > 0 && randNum < 33) {
        comp = 'rock';
        return 'rock';
    }
    else if (randNum > 33 && randNum < 66) {
        comp = 'paper';
        return 'paper';
    }
    else {
        comp = 'scissors';
        return 'scissors';
    }
}

const lowerBody = document.querySelector('.lowerBody');
const msg = document.createElement('p');
msg.classList.add('msg');
lowerBody.appendChild(msg);

function playRound(playerSelection, computerSelection) {
    
    if (comp == player) {
        msg.textContent = "It is a tie!";
        game();
    }
    else if (comp == 'paper' && player == 'rock') {    
        msg.textContent = 'The computer won this round: Paper beats rock!';
        compWins += 1;
        game();
    }
    else if (player == 'paper' && comp == 'rock') {
        msg.textContent = 'You won this round: Paper beats rock!';
        playerWins += 1;
        game();
    }
    else if (comp == 'rock' && player == 'scissors') {    
        msg.textContent = 'The computer won this round: Rock beats scissors!';
        compWins += 1;
        game();
    }
    else if (player == 'rock' && comp == 'scissors') {       
        msg.textContent = 'You won this round: Rock beats scissors!';
        playerWins += 1;
        game();
    }
    else if (comp == 'scissors' && player == 'paper') {  
        msg.textContent = 'The computer won this round: Scissor beats paper!';
        compWins += 1;
        game();
    }
    else if (player == 'scissors' && comp == 'paper') {
        msg.textContent = 'You won this round: Scissor beats paper!';
        playerWins += 1;
        game();
    }
}

const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', () => {
    player = 'rock';
    playerRock.classList.add('playing');
    
    if (playerWins === 5 || compWins === 5) {
        compWins = 0;
        playerWins = 0;
        whoWon.textContent = "";
    }

    playRound(player, computerPlay());
});

const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', () => {
    player = 'paper';
    playerPaper.classList.add('playing');

    if (playerWins === 5 || compWins === 5) {
        compWins = 0;
        playerWins = 0;
        whoWon.textContent = "";
    }

    playRound(player, computerPlay());
});

const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', () => {
    player = 'scissors';
    playerScissors.classList.add('playing');

    if (playerWins === 5 || compWins === 5) {
        compWins = 0;
        playerWins = 0;
        whoWon.textContent = "";
    }

    playRound(player, computerPlay());
});

function removeTransition(e) {
    this.classList.remove('playing');
}

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('transitionend', removeTransition));

const winCount = document.querySelector('.winCount');
const playerScore = document.createElement('div');
playerScore.classList.add('playerWins');
const compScore = document.createElement('div');
compScore.classList.add('playerWins');

const msgWin = document.querySelector('.msgWin');
const whoWon = document.createElement('div');
whoWon.classList.add('whoWon');

winCount.appendChild(playerScore);
winCount.appendChild(compScore);
msgWin.appendChild(whoWon);

function game() {

    if (playerWins <= 5 || compWins <= 5) {
        playerScore.textContent = `Player: ${playerWins}`;
        compScore.textContent = `Computer: ${compWins}`;

        if (playerWins == 5) {
            whoWon.textContent = "You won the game!";
        }
        if (compWins == 5) {
            whoWon.textContent = "The computer wins the game :(";
        }
    }
    
}