const displayChar = document.querySelector(".display");
const animeChars = document.querySelectorAll(".anime-char");
const timer = document.querySelector("#timer");
const displayScore = document.querySelector("#score");
const enterButton = displayChar.nextElementSibling;

let score = 0;
let timerInterval;

const inputChar = () => {
  if (timer.textContent === "Time's up!") {
    return;
  }
  const inputChars = displayChar.value.trim().toLowerCase();
  let found = false;
  animeChars.forEach((animeChar) => {
    const showChars = animeChar.textContent.trim().toLowerCase();
    if (
      inputChars === showChars &&
      animeChar.classList.contains("text-transparent")
    ) {
      animeChar.classList.remove("text-transparent");
      found = true;
    }
  });
  if (found) {
    score++;
    displayScore.style.color = "white";
    displayScore.textContent = `${score}`;
  }
  if (!timerInterval) {
    timerCount();
  }
  displayChar.value = "";
  displayChar.focus();
};

const timerCount = () => {
  let count = 300;
  timerInterval = setInterval(() => {
    const minutes = Math.floor(count / 60);
    const seconds = count % 60;
    timer.style.color = "red";
    timer.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    if (count === 0) {
      clearInterval(timerInterval);
      timer.textContent = "Time's up!";
    } else {
      count--;
    }
  }, 1000);
};

displayChar.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    enterButton.click();

    if (!timerInterval) {
      timerCount();
    }
  }
});
