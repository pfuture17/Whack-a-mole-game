const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
const grid = document.querySelector('.grid');
const startBtn = document.querySelector('#startBtn');

let highScore = document.querySelector('#highScore');


let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;
let hitPosition = 0;

function randomSquare(){
    square.forEach(function(className) {
        className.classList.remove('mole');
    });
    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');
    hitPosition = randomPosition.id;
};
square.forEach(function (id){
    id.addEventListener('mouseup', function() {
        if(id.id === hitPosition) {
            result++
            score.textContent = result
            hitPosition=null;
        }
  })
})


startBtn.addEventListener('click', function(){
    function moveMole (){
        setInterval(randomSquare,800);
    }
    moveMole();

    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime;
        if(currentTime === 0 ) {
          alert('GAME OVER! Your final score is ' + result);
          if (result > highScore.textContent) {
              localStorage.setItem("highscore", result)
              
            }
            location.reload();

          
        }
    }
    let timerId = setInterval(countDown, 1000);   

})
highScore.textContent = localStorage.getItem("highscore")










