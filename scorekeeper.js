let p1Score=0;
let p2Score=0;
let winningScore=1;
let isGameOver=false;
let p1Dsiplay=document.querySelector('#p1Display');
let p2Dsiplay=document.querySelector('#p2Display');

let p1Button=document.querySelector('#p1Button');
let p2Button=document.querySelector('#p2Button');
let reset=document.querySelector('#reset');
let maxScore=document.querySelector('#maxScore');
//let winningScore=maxScore
maxScore.addEventListener('change',function()
{
    winningScore=parseInt(this.value);//now we actually got a string from HTML side i.e. value='xyz' we need to covert into integer format to make use of it.
    alert(`Match upto is set to ${this.value}`);
    resetp();
})
p1Button.addEventListener('click', function()
{
    if(!isGameOver)
    {
        p1Score=1+p1Score;
        if(p1Score === winningScore)
        {
            isGameOver=true;
            p1Dsiplay.classList.add('winner');//for wiining an losing
            p2Dsiplay.classList.add('loser');
        }   
        p1Dsiplay.textContent=p1Score;
    }
})
p2Button.addEventListener('click', function()
{   
    if(isGameOver===false)
    {
        p2Score=1+p2Score;
        if(p2Score===winningScore)
        {
            isGameOver=true;
            p2Dsiplay.classList.add('winner');
            p1Dsiplay.classList.add('loser');
        }   
        p2Dsiplay.textContent=p2Score;
    }   
})
reset.addEventListener('click', resetp);
function resetp()
{
    p1Score=0;
    p1Dsiplay.textContent=p1Score;
    p2Score=0;
    p2Dsiplay.textContent=p2Score;
    isGameOver=false;
    p1Dsiplay.classList.remove('winner', 'loser');
    p2Dsiplay.classList.remove('winner', 'loser'); 
}
