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

    const computerChoice = getcomputerChoice();

    console.log(playerChoice,computerChoice);


}

function getcomputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber < 0.34){
        return 'rock'
    }else if(randomNumber < 0.67){
        return 'paper'
    }else{
        return 'scissors'
    }
}

choices.forEach(choice => choice.addEventListener('click',play));