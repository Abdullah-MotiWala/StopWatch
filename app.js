var timeInMiliSec = 0;
var timeInSec = 0;
var timeInMin = 0;
var timeInHour = 0;
function stopWatch() {
  ++timeInMiliSec;
  document.querySelector(".timeInIt1").innerText = timeInMiliSec;
  if (timeInMiliSec == 999) {
    timeInMiliSec = 0;
    ++timeInSec;
    document.querySelector(".timeInIt2").innerText = timeInSec;
  }
  if (timeInSec == 5) {
    document.querySelector(".timeInIt2").innerText = 0;
    timeInSec = 0;
    ++timeInMin;
    document.querySelector(".timeInIt3").innerText = timeInMin;
  }
  if (timeInMin == 5) {
    document.querySelector(".timeInIt3").innerText = 0;
    timeInMin = 0;
    ++timeInHour;
    document.querySelector(".timeInIt4").innerText = timeInHour;
  }
}
function finalRes() {
  starting = setInterval(stopWatch, 0.5);
  var buttonId = (document.getElementById("startButton").disabled = true);
}

function pause() {
  clearInterval(starting);
  var buttonId = (document.getElementById("startButton").disabled = false);
}
function reset() {
  clearInterval(starting);
  var buttonId = (document.getElementById("startButton").disabled = false);
  document.querySelector(".timeInIt1").innerText = 0;
  document.querySelector(".timeInIt2").innerText = 0;
  document.querySelector(".timeInIt3").innerText = 0;
  document.querySelector(".timeInIt4").innerText = 0;
  timeInMiliSec = 0;
  timeInSec = 0;
  timeInMin = 0;
  timeInHour = 0;
}
