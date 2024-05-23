'use strict';
/*
// 70. Project1#: Guess My Number

console.log(document.querySelector('.message').textContent);

// 71. Whats the DOM and DOM Manipulation

// DOM - document object model: allows javascript to access html elements and styles to manipulate them
// change text, html atributes and even css styles

// DOM always start with document (entry point - document.querySelector())
//the first child element is html (root element of all html objects)
// html childs: head and body

// DOM Methods and Propertirs for DOM Manipulation !== JS

// DOM Methods and Properties are part of something called in web APIs
// APIs are like libraries that browsers implement and that we can access from our JS code
// API - application program interface - libraries that are also written in JS and are automatically available for us to use


// 72. Selecting and Manipulation Elements

document.querySelector(`.message`).textContent = `Correct Number!`; // DOM manipulation
console.log(document.querySelector('.message').textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;

document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);

*/

// 73. Handling Click Events
// 74. Implementing Game Logic
// 75. Manipulating CSS Styles

//event listener - mouse click, mouse moving or key press...

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;
const displayMessage = function(message) {
  document.querySelector(`.message`).textContent = message;
}
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //if is not a true value, such as 0, or it is false, this block will be executed
   displayMessage(`⛔ No number!`);

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage(`🎊 Correct Number!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`; //we use style to modify css, followed by the property we want to change. The color must be inside of a string
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`.number`).style.width = `30rem`; // dimensions needs to be strings with units
    if (score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
    
  //when the number is different
  } else if (guess !== secretNumber) {
    if (guess > 1){
      displayMessage(guess > secretNumber ? ` 📈 Too high!` : `📉 Too low!`);}
      score--;
      document.querySelector(`.score`) = score;
    } else {
      displayMessage(`😞 You lost the game!`);
      document.querySelector(`.score`).textContent = 0;
    }
  })

    
    
  
  
    
    //When number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = ` 📈 Too high!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `😞 You lost the game!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   } //when number is too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(`.message`).textContent = `📉 Too low!`;
//       score--;
//       document.querySelector(`.score`).textContent = score;
//     } else {
//       document.querySelector(`.message`).textContent = `😞 You lost the game!`;
//       document.querySelector(`.score`).textContent = 0;
//     }
//   }
// });

// solution
document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(`Start guessing...`);
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
