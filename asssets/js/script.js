//create one function for each specific task to avoid using global scope as much as possible

//2 types of EVENT LISTENERS: 1. runs when page loads, 2. runs when clicking buttons

//target document and wait for content to load otherwise it might create problems when running script if not all components are rendered yet
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked submit");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed
 */ //this is a function comment which allows to view comment when hovering over the function name
function runGame() {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function displayAdditionQuestions() {}

function displaySubtractQuestions() {}

function displayMultiplyQuestions() {}
