//game values

let min = 1,
    max = 10,
    winningNum = randomNum(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
  
//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//event listener on play again button
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});

//listen for guess trigger
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //validate input
  if(isNaN(true)|| guess < min || guess > max){
    setMessage(`Please enter a proper number betweer ${min} and ${max}`, red);
  }
  //check if won 
  if(guess === winningNum){
    gameOver(true, `${winningNum} is Correct, You Da Boss`)
    
  } else{
      //wrong number
      guessesLeft -= 1;

    if(guessesLeft === 0){
    //game over - lost

     //disable input
     guessInput.disabled = true;
     // change border
     guessInput.style.borderColor ='red'
      //send message
     gameOver(false, `${guess} is not correct you lost the correct number was ${winningNum}`)

    } else {
        //game continues answer wrong 

        //change border color 
        guessInput.style.borderColor = 'red';

        //send message of guesses left
        setMessage(`${guess} is not correct you try again, you have ${guessesLeft} left`, 'red')

        
        guessInput.value = '';
      }
  }
});

function gameOver(won, msg){

  let color;
  won === true ? color = 'green' : color = 'red';
  //disable input
  guessInput.disabled = true;
  // change border
  guessInput.style.borderColor = color;
  //set text color
  guessInput.style.color = color;

  //change button to play again
guessBtn.value = 'Play Again';
guessBtn.className += 'play-again';  

  //send message
  setMessage(msg);
}
//set message
function setMessage (msg, color){
  message.textContent = msg;
  message.style.color = color;
}
//rando num generator
function randomNum(min, max){
  return Math.floor(Math.random()*(max - min + 1)+ min);
}