"use strict";
let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user_score");
let compScore_span = document.getElementById("comp_score");
const status_div = document.querySelector(".status_message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const SMALL_USER_WORD = "user".fontsize(3);
const SMALL_COMP_WORD = "comp".fontsize(3);

///.sup();

function randomCompChoice() {
  const rps = ["rock", "paper", "scissors"];
  let randomPick = Math.floor(Math.random() * rps.length);
  return rps[randomPick];
}

function userRPSclick() {
  rock_div?.addEventListener("click", function () {
    gamePlay("rock", randomCompChoice());
  });

  paper_div?.addEventListener("click", function () {
    gamePlay("paper", randomCompChoice());
  });

  scissors_div?.addEventListener("click", function () {
    gamePlay("scissors", randomCompChoice());
  });
}
userRPSclick();

function gamePlay(userClick, compClick) {
  if (
    (userClick === "rock" && compClick === "scissors") ||
    (userClick === "paper" && compClick === "rock") ||
    (userClick === "scissors" && compClick === "paper")
  ) {
    return win(userClick, compClick);
  }
  if (
    (userClick === "rock" && compClick === "paper") ||
    (userClick === "paper" && compClick === "scissors") ||
    (userClick === "scissors" && compClick === "rock")
  ) {
    return loss(userClick, compClick);
  }
  if (userClick === compClick) {
    return tied(userClick, compClick);
  }
}

function updateGameDom(userClick, statusMsg, glowClass) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;

  status_div.innerHTML = statusMsg;

  if (glowClass) {
    document.getElementById(userClick).classList.add(glowClass);
    setTimeout(function () {
      document.getElementById(userClick).classList.remove(glowClass);
    }, 300);
  }
}

function win(userClick, compClick) {
  userScore++;
  updateGameDom(
    userClick,
    `${userClick.toUpperCase()} ${SMALL_USER_WORD} beats ${compClick.toUpperCase()} ${SMALL_COMP_WORD}. You Win!`,
    "green_glow"
  );
}

function loss(userClick, compClick) {
  compScore++;
  const user = userClick.toUpperCase();
  const comp = compClick.toUpperCase();
  updateGameDom(
    userClick,
    `${comp} ${SMALL_COMP_WORD} beats ${user} ${SMALL_USER_WORD}. You Lost!`,
    "red_glow"
  );
}

function tied(userClick, compClick) {
  const user = userClick.toUpperCase();
  const comp = compClick.toUpperCase();
  updateGameDom(
    userClick,
    `${user} ${SMALL_USER_WORD} equals ${comp} ${SMALL_COMP_WORD}. You are Tied!`
  );
}
