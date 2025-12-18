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
        runGame(gameType);
      }
    });
  }
  runGame("addition");
});

/**
 * The main game "loop", called when the script is first loaded and after the user's answer has been processed
 */ //this is a function comment which allows to view comment when hovering over the function name anywhere in the file without having to go to the function declaration
function runGame(gameType) {
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    displayAdditionQuestions(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting!`;
  }
}

function checkAnswer() {}

function calculateCorrectAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

/**
 *
 * @param {*is the first operand which is randomly generated when button is clicked } operand1
 * @param {*} operand2
 */
function displayAdditionQuestions(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function displaySubtractQuestions() {}

function displayMultiplyQuestions() {}
