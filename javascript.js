let comp, player, compWins = 0, playerWins = 0;


function computerPlay() {
    let randNum = Math.floor(Math.random()*100 + 1);
    
    //console.log(randNum);

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

    //console.log(compChoice);
}

// function playerPlay() {
//     let playerChoice = prompt("Choose Rock, Paper, or Scissors!");
//     let playerChoicelc = playerChoice.toLowerCase();
//     //console.log(playerChoicelc);
//     if (playerChoicelc == 'rock') {
//         player = 'rock';
//         return player;
//     }
//     else if (playerChoicelc == 'paper') {
//         player = 'paper';
//         return player;
//     }
//     else {
//         player = 'scissors';
//         return player;
//     }
    
// }

const lowerBody = document.querySelector('.lowerBody');
const msg = document.createElement('p');
msg.classList.add('msg');

function playRound(playerSelection, computerSelection) {
    
    // const lowerBody = document.querySelector('.lowerBody');
    // const msg = document.createElement('p');
    // msg.classList.add('msg');
    
    
    if (comp == player) {
        msg.textContent = "It is a tie!";

        lowerBody.appendChild(msg);
        //console.log('It is a tie!');
    }
    else if (comp == 'paper' && player == 'rock') {
        
        msg.textContent = 'The computer wins: Paper beats rock!';

        lowerBody.appendChild(msg);
        //console.log('The computer wins: Paper beats rock!');
        compWins += 1;
    }
    else if (player == 'paper' && comp == 'rock') {
        
        msg.textContent = 'You win: Paper beats rock!';

        //lowerBody.appendChild(msg);
        //console.log('You win: Paper beats rock!');
        playerWins += 1;
    }
    else if (comp == 'rock' && player == 'scissors') {
        
        msg.textContent = 'The computer wins: Rock beats scissors!';

        //lowerBody.appendChild(msg);
        //console.log('The computer wins: Rock beats scissors!');
        compWins += 1;
    }
    else if (player == 'rock' && comp == 'scissors') {
        
        msg.textContent = 'You win: Rock beats scissors!';

        //lowerBody.appendChild(msg);
        //console.log('You win: Rock beats scissors!');
        playerWins += 1;
    }
    else if (comp == 'scissors' && player == 'paper') {
        
        msg.textContent = 'The computer wins: Scissor beats paper!';

        //lowerBody.appendChild(msg);
        //console.log('The computer wins: Scissosr beats paper!');
        compWins += 1;
    }
    else if (player == 'scissors' && comp == 'paper') {
        
        msg.textContent = 'You win: Scissor beats paper!';

        //lowerBody.appendChild(msg);
        //console.log('You win: Scissors beats paper!');
        playerWins += 1;
    }
}

const playerRock = document.querySelector('.rock');
playerRock.addEventListener('click', () => {
    player = 'rock';
    playerRock.classList.add('playing');
    playRound(player, computerPlay());
});

const playerPaper = document.querySelector('.paper');
playerPaper.addEventListener('click', () => {
    player = 'paper';
    playerPaper.classList.add('playing');
    playRound(player, computerPlay());
});

const playerScissors = document.querySelector('.scissors');
playerScissors.addEventListener('click', () => {
    player = 'scissors';
    playerScissors.classList.add('playing');
    playRound(player, computerPlay());
});

function removeTransition(e) {
    this.classList.remove('playing');
}

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('transitionend', removeTransition));










// function game() {
//     for (let i = 0; i < 5; i++) {
//         playRound(playerPlay(), computerPlay());
//         console.log(`  Computer: ${comp}`);
//         console.log(`  Player: ${player}`);    
//     }
    
//     console.log(`Computer's score: ${compWins}`);
//     console.log(`Player's score: ${playerWins}`);
// }

// game();

//playRound(playerPlay(), computerPlay());




