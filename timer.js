const counter = document.querySelector(".counter");
const btn = document.querySelector(".buttons");
const minutesInput = document.getElementById("minutes");

var seconds;
var minutes;
var remseconds;
var toCount;

function display(first, second) {
  document.getElementById(first).style.display = "none";
  document.getElementById(second).style.display = "block";
}

function submit() {
  display("submit", "start");
  seconds = Number(minutesInput.value * 60);
  minutesInput.style.display = "none";
  calculate();
}

function check(stat) {
  toCount = stat.value;
  if (stat.id == "start") {
    display("start", "stop");
  } else if (stat.id == "stop") {
    display("stop", "continue");
  } else {
    display("continue", "stop");
  }
}

// converts minutes to seconds
function calculate() {
  remseconds = seconds % 60;
  minutes = Math.floor(seconds / 60);

  if (remseconds < 10) {
    remseconds = "0" + remseconds;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  counter.innerHTML = minutes + " : " + remseconds;
  setInterval(count, 1000);
}

// timer counts down
function count() {
  if (seconds > 0) {
    if (toCount == true) {
      seconds--;
      remseconds = seconds % 60;
      minutes = Math.floor(seconds / 60);

      if (remseconds < 10) {
        remseconds = "0" + remseconds;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      counter.innerHTML = minutes + " : " + remseconds;
    }
  } else {
    counter.innerHTML = "Done!";
    btn.style.opacity = "0";
  }
}

// resets the timer aka reloads the page LOL
function reset() {
  seconds = 0;
  location.reload();
}
