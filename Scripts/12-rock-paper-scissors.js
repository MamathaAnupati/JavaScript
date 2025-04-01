let score=JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();
/*if(!score){
score={
  wins:0,
  losses:0,
  ties:0
}
}*/

let compMove='';
function pickComputermove()
{
const RandomNo=Math.random();

  if(RandomNo>=0&&RandomNo<1/3)
      { 
      compMove='rock';
      }
  else if(RandomNo>=1/3&&RandomNo<2/3)
      {
      compMove='paper';
      }
  else if(RandomNo>=2/3&&RandomNo<1)
      {
      compMove='Scissors';
      }
    
}
function pickPlayermove()
{
const RandomNo=Math.random();

  if(RandomNo>=0&&RandomNo<1/3)
      { 
     return 'rock';
      }
  else if(RandomNo>=1/3&&RandomNo<2/3)
      {
      return 'paper';
      }
  else if(RandomNo>=2/3&&RandomNo<1)
      {
      return 'Scissors';
      }
    
}
  document.querySelector('.js-rock-button').addEventListener('click',()=>{  pickComputermove();
    playGame('rock')});
  document.querySelector('.js-paper-button').addEventListener('click',()=>{pickComputermove();
    playGame('paper')});
  document.querySelector('.js-scissors-button').addEventListener('click',()=>{  pickComputermove();
    playGame('Scissors')});
document.body.addEventListener('keydown',(event)=>{
if(event.key==='r')
  {pickComputermove();
    playGame('rock')  }
    elseif(event.key==='p')
    {pickComputermove();
      playGame('paper')
    }
    elseif(event.key==='s')
    {pickComputermove();
      playGame('scissors')
    }

});
function playGame(playerMove)
{
let result='';
  if(playerMove==='Scissors')
  {
        if(compMove==='rock')
          {
              result='You Lose';
          }
      else if(compMove==='Scissors')
          {
            result='Tie';
          }
      else if(compMove==='paper')
          {
            result='You Win';
          }
  }
  else if(playerMove==='rock')
  {
        if(compMove==='rock')
          {
              result='Tie';
          }
      else if(compMove==='Scissors')
          {
            result='You Lose';
          }
      else if(compMove==='paper')
          {
            result='You Win';
          }
  }
  else if(playerMove==='paper')
  {
        if(compMove==='rock')
          {
              result='You Win';
          }
      else if(compMove==='Scissors')
          {
            result='You Lose';
          }
      else if(compMove==='paper')
          {
            result='Tie';
          }
  }
  if(result==='You Win')
  {
    score.wins++;
  }
  else if(result==='You Lose')
  {
    score.losses++;
  }
  else if(result==='Tie')
  {
    score.ties++;
  }
localStorage.setItem('score',JSON.stringify(score));
updateScoreElement();
document.querySelector('.js-result').innerHTML= result;
   document.querySelector('.js-moves').innerHTML=`You <img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${compMove}-emoji.png" class="move-icon"> Computer`;
/* alert(`You picked ${playerMove}.Computer picked ${compMove}.${result}.
Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`)*/

}
function updateScoreElement()
{document.querySelector('.js-score').innerHTML=`Wins:${score.wins},Losses:${score.losses},Ties:${score.ties}`;
}
let isAutoPlaying=false;
let intervalId;
function autoPlay(){if(!isAutoPlaying){

  intervalId=setInterval(()=>{
    const playerMove=pickPlayermove()
    pickComputermove();
    playGame(playerMove);
  },1000);
  isAutoPlaying=true;
}

else{
  clearInterval(intervalId);
  isAutoPlaying=false;
}}