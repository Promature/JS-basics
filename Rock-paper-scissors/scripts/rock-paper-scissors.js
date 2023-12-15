const score = JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

function getCompMove()
{
    let num = Math.random();
    let compMove = '';
    if(num>=0 && num<1/3)
    {
        compMove = 'Rock';
    }
    else if(num>=1/3 && num<2/3)
    {
        compMove = 'Paper';
    }
    else{
        compMove = 'Scissors';
    }
    return compMove;
}
function getResult(playerMove,compMove)
{
    let result = '';

    if(playerMove==='Rock')
    {
        if(compMove === 'Rock')
        {
            result = 'Tie!';
            score.tie++;
        }
        else if(compMove=== 'Paper')
        {
            result = 'You Lose!';
            score.lose++;
        }
        else{
            result = 'You Win!!';
            score.win++;
        }
    }

    if(playerMove==='Paper')
    {
        if(compMove === 'Rock')
        {
            result = 'You Win!!';
            score.win++;
        }
        else if(compMove=== 'Paper')
        {
            result = 'Tie!';
            score.tie++;
        }
        else{
            result = 'You Lose!';
            score.lose++;
        }
    }
    if(playerMove==='Scissors')
    {
        if(compMove === 'Rock')
        {
            result = 'You Lose!';
            score.lose++;
        }
        else if(compMove=== 'Paper')
        {
            result = 'You Win!!';
            score.win++;
        }
        else{
            result = 'Tie!';
            score.tie++;
        }
    }
    localStorage.setItem('score',JSON.stringify(score));

    return result;
}

function resetScore()
{
    localStorage.removeItem('score');
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    let scorePara = document.querySelector(".js-score");

    scorePara.innerHTML = `Wins:${score.win}, Losses:${score.lose}, Ties:${score.tie}.`;
    
    let movesPara = document.querySelector('.js-pickedMoves');
    movesPara.innerHTML = "";
}

function showScore()
{
    let scorePara = document.querySelector(".js-score");

    scorePara.innerHTML = `Wins:${score.win}, Losses:${score.lose}, Ties:${score.tie}.`;
}

function showPickedMoves(playerMove, compMove)
{
    let movesPara = document.querySelector('.js-pickedMoves');
    movesPara.innerHTML = `You <Img src="Images/${playerMove}-emoji.png" height=50px> - <img src="Images/${compMove}-emoji.png" height=50px> Computer`;
}