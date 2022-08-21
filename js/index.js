function rollDice() {
  var rand1 = Math.random();
  var dice1Value = Math.floor(rand1 * 6) + 1;

  var rand2 = Math.random();
  var dice2Value = Math.floor(rand2 * 6) + 1;

  // console.log(" dice 1 = " + dice1Value +" dice 2 = " + dice2Value);

  document.querySelector("#result").textContent = "";

  document.querySelector(".dice1").textContent = dice1Value;
  document.querySelector(".dice2").textContent = dice2Value;

  resultDisplay(dice1Value, dice2Value);
}

function resultDisplay(dice1Value, dice2Value) {
  if (dice1Value == dice2Value) {
    document.querySelector("#result").textContent = "Draw ! Roll Again.";
  } else if (dice1Value > dice2Value) {
    document.querySelector("#result").textContent = "Player 1 Winner 🎉🤩";
  } else {
    document.querySelector("#result").textContent = "Player 2 Winner  🎉🤩";
  }

  document.querySelector(".copyrights").style.margin = "0";
  document.querySelector(".roll").style.margin = "6% auto 0";
}
