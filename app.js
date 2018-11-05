/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

//var x = document.querySelector('#score-0').textContent;
//console.log(x);




//trabalhando com a figura do dado
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlaying){
        
    //  1. random dice's number
        var dice = Math.floor(Math.random()*6) +1;

    //  2. display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'img/dice-' + dice + '.png';

    //  3. Update the round score IF the rolled number was NOT a 1

        if (dice !== 1) {
    //        add score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
    //        next player
            nextPlayer();
        }
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying){
    //    add current score to global score
        scores[activePlayer] += roundScores;

    //    update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];


    //    check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.querySelector('.dice').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    //        Após terminar o jogo não permite mais jogar
    //        Tem que começar um novo jogo
            gamePlaying = false;

        } else {
    //    next player
        nextPlayer();

        }
        
    }
    
});




function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
};



//botão new
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    gamePlaying = true;
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
//    retira a classe active nos dois players e recoloca no player 0
//    pode ter o perigo de ter duas classes active
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    

}





















































