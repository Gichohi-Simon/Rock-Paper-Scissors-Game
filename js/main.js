//get all choices rock paper Scissors
const choices = document.querySelectorAll(".choice");
//get the score
const score = document.getElementById("score");
//display results button
const result = document.getElementById("result");
//restart button
const restart = document.getElementById("restart");
//modal
const modal = document.querySelector(".modal");

//score board
const scoreboard = {
  player: 0,
  computer: 0,
};

//gets the player choice.

function play(e){
    restart.style.display = 'inline-block';

    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);

    console.log(playerChoice,computerChoice,winner);
}

function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.34){
        return 'rock'
    }else if(rand <=0.67){
        return 'paper'
    }else{
        return 'scissor'
    }
}

function getWinner(p,c){
   if(p === c){
       return 'draw'
   }else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer'
        }else{
            return 'player'
        }
   }else if(p === 'paper'){
       if(c ==='scissors'){
           return 'computer'
       }else{
           return 'player'
       }
   }else if(p === 'scissors'){
       if(c === 'rock'){
           return 'computer'
       }else{
           return 'player'
       }
   }
}

choices.forEach((choice)=>choice.addEventListener('click',play));