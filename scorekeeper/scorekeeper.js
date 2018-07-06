var p1btn = document.getElementById("player1btn");
var p2btn = document.getElementById("player2btn");
var resetBtn = document.getElementById("reset");
var input = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var card = document.getElementById("card");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var gameOver = false;
var winningScore = 5;

p1btn.addEventListener("click",function(){
  if (!gameOver) {
    p1Score++;
    if(p1Score === winningScore){
    p1.classList.add("winner");
    gameOver = true;
    }
    p1.innerHTML = p1Score;
  }
})

p2btn.addEventListener("click",function(){
  if (!gameOver) {
    p2Score++;
    if(p2Score === winningScore){
      p2.classList.add("winner");
      gameOver = true;
  }
  p2.innerHTML = p2Score;
  }
})

function reset(){
  p1Score = 0;
  p1.innerHTML = 0;
  p2Score = 0;
  p2.innerHTML = 0;
  p1.classList.remove("winner");
  p2.classList.remove("winner");
  gameOver = false;
};

resetBtn.addEventListener("click",function(){
  reset();
})

input.addEventListener("change",function(){
  card.textContent = input.value;
  winningScore = Number(input.value);
  reset();
})
