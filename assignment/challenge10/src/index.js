const rangeForm = document.querySelector("#number-range");
const rangeInput = document.querySelector("#number-range input");
const guessForm = document.querySelector("#play-game");
const guessInput = document.querySelector("#play-game input");
const gameResult = document.querySelector("#game-result");
const playerMatch = document.querySelector("#game-result span:first-child");
const matchResult = document.querySelector("#game-result span:last-child");

function handleRangeInput() {
  const rangeValue = rangeInput.value;
  guessInput.setAttribute("min", 0);
  guessInput.setAttribute("max", rangeValue);
}

function handleSubmit(event) {
  event.preventDefault();
  const chooseValue = guessInput.value;
  const randomValue =
    Math.ceil(Math.random() * rangeInput.value - 1) &&
    Math.floor(Math.random() * rangeInput.value + 1);
  gameResult.classList.remove("hidden");
  playerMatch.innerText = `You chose: ${chooseValue}, the machine chose: ${randomValue}.`;

  if (parseInt(chooseValue, 10) === randomValue) {
    matchResult.innerText = "You Win!";
  } else {
    matchResult.innerText = "You lost!";
  }
}

rangeForm.addEventListener("input", handleRangeInput);
guessForm.addEventListener("submit", handleSubmit);
