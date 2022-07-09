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

function playRound(playerSelection, computerSelection) {
    if (comp == player) {
        const lowerBody = document.querySelector('.lowerBody');
        const msg = document.createElement('p');
        msg.classList.add('msg');
        msg.textContent = "It is a tie!";

        lowerBody.appendChild(msg);
        //console.log('It is a tie!');
    }
    else if (comp == 'paper' && player == 'rock') {
        console.log('The computer wins: Paper beats rock!');
        compWins += 1;
    }
    else if (player == 'paper' && comp == 'rock') {
        console.log('You win: Paper beats rock!');
        playerWins += 1;
    }
    else if (comp == 'rock' && player == 'scissors') {
        console.log('The computer wins: Rock beats scissors!');
        compWins += 1;
    }
    else if (player == 'rock' && comp == 'scissors') {
        console.log('You win: Rock beats scissors!');
        playerWins += 1;
    }
    else if (comp == 'scissors' && player == 'paper') {
        console.log('The computer wins: Scissosr beats paper!');
        compWins += 1;
    }
    else if (player == 'scissors' && comp == 'paper') {
        console.log('You win: Scissors beats paper!');
        playerWins += 1;
    }

}

const playerRock = document.querySelector('.rock');

playerRock.addEventListener('click', () => {
    player = 'rock';
    playRound(player, computerPlay());
});







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




