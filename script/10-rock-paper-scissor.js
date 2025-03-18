const score = JSON.parse(localStorage.getItem('score')) || {
    Wins: 0,
    losses:0,
    Ties:0};
    updatescoreElement();
function playGame(playerMove){
    const computermove = pickcomputermove();
    let result;


    if(playerMove === 'Scissor'){
        if(computermove === 'Rock'){
            result = 'Lost';
        }
        else if(computermove ==='Paper'){
            result='Win';
        }
        else if(computermove ==='Scissor'){
            result='Tie';
        }
    }
    

    else if(playerMove === 'Rock'){
        if(computermove === 'Rock'){
            result = 'Tie';
        }
        else if(computermove ==='Paper'){
            result='Lost';
        }
        else if(computermove ==='Scissor'){
            result='Win';
        }
    }

    else if(playerMove === 'Paper'){
        if(computermove === 'Rock'){
            result = 'Win';
        }
        else if(computermove ==='Paper'){
            result='Tie';
        }
        else if(computermove ==='Scissor'){
            result='Lost';
        }
    }

    updateresultElement(result);
    updateMoveElement(playerMove,computermove);

    //Update the score

    if(result ==='Win'){
        
        score.Wins++;
        
    }

    else if(result ==='Lost'){
        score.losses++;
    }

    else if(result ==='Tie'){
        score.Ties++;
    }


    localStorage.setItem('score',JSON.stringify(score));
   
    updatescoreElement();
    //showing score
/*alert(`Your move ${playerMove}  Computers Move ${computermove}  You ${result}
Wins:${score.Wins} Losses:${score.losses} Ties:${score.Ties}`);*/
} 

function pickcomputermove(){
    randomnumber = Math.random();
    let computermove;

if(randomnumber >= 0 && randomnumber < 1/3){
    computermove = 'Rock';
    
}
else if(randomnumber >= 1/3 && randomnumber < 2/3){
    computermove = 'Paper';
    
}
else if(randomnumber >= 2/3 && randomnumber <=1){
    computermove = 'Scissor';
   
}

return computermove;
}

function updatescoreElement(){
    document.querySelector('#js-score').innerHTML = `Wins:${score.Wins} Losses:${score.losses} Ties:${score.Ties}`;
}

function updateresultElement(result){
    document.querySelector('#js-result').innerHTML = `You ${result}`;
}

function updateMoveElement(playerMove,computermove){
   document.querySelector('#js-move').innerHTML = `You
<img src="../image/${playerMove}-emoji.png" alt="${playerMove}" class="move-icon">

<img src="../image/${computermove}-emoji.png" alt="${computermove}" class="move-icon">
computer`;
}