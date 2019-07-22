const button = document.createElement("button");
button.innerText = "Start Timer";

const bodySelect = document.querySelector("body");
const digits = document.querySelector('.digits');


bodySelect.style.display = "flex";

bodySelect.style.flexDirection = "column";

button.style.marginTop = "50px";
button.style.backgroundColor = "peach";
button.style.border = "none";
button.style.width = "200px";
button.style.height = "50px";
button.style.fontSize = "1.5rem";
button.addEventListener("click", startTimer);

bodySelect.appendChild(button);

const msTens = document.querySelector("#msTens");
const msHundreds = document.querySelector("#msHundreds");
const secondOnes = document.querySelector("#secondOnes");
const seconddTens = document.querySelector("#secondTens");

// console.log(msTens);

let msTensCounter = 1;
let msHundredsCounter = 1;

let secondCounter = 1;
let tensCounter = 1;

function startTimer() {
  let intervalFunction = setInterval(function() {
    if (msTensCounter == 0) {
      if (msHundredsCounter == 0) {
        if (secondCounter == 0) {
          seconddTens.innerText = tensCounter;
          digits.style.color = "red";
          clearInterval(intervalFunction);
        }

        secondOnes.innerText = secondCounter;
        secondCounter++;

        if (secondCounter == 10) {
          secondCounter = 0;
        }
      }

      msHundreds.innerText = msHundredsCounter;
      msHundredsCounter++;

      if (msHundredsCounter == 10) {
        msHundredsCounter = 0;
      }
    }

    msTens.innerText = msTensCounter;
    msTensCounter++;

    if (msTensCounter == 10) {
      msTensCounter = 0;
    }
  }, 10);
}
