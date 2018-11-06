
var scores, roundScores, activePlayer, gamePlaying;

init();

var lastDice, scoreMax;

//trabalhando com a figura do dado
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlaying){
        
    //  1. random dice's number
        var dice1 = Math.floor(Math.random()*6) +1;
        var dice2 = Math.floor(Math.random()*6) +1;
        
    //  2. display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'img/dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'img/dice-' + dice2 + '.png';

    //  3. Update the round score IF the rolled number was NOT a 1
        
        if (dice1 !== 1 && dice2 !== 1) {
    //        add score
            roundScores += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
//            Próximo usuário
            nextPlayer();
        }
        
        /*
        if (dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            
            nextPlayer();
        }else if (dice !== 1) {
    //        add score
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;
        } else {
//            Próximo usuário
            nextPlayer();
        }
        
        lastDice = dice;
        */
    }
    
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying){
    //    add current score to global score
        scores[activePlayer] += roundScores;

    //    update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
//        Obtendo o valor máximo para vencer
        var input = document.querySelector('.final-score').value;
        var winningStore;
        
//        Underfined, 0, null or "" are COERCED to false
        if(input){
            winningStore = input;
        } else {
            winningStore = 100;
        }
        
        
    //    check if player won the game
        if (scores[activePlayer] >= winningStore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';

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
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
};



//botão new
document.querySelector('.btn-new').addEventListener('click', init);


function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    
//    scoreMax = prompt('What is max score?');
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
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





















































