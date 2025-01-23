let btnContainer = document.querySelector(".btn-container");
const value = {
  hour: 0,
  min: 0,
  sec: 0,
  millisec: 0,
};
let timerDiv = document.querySelector(".timer");
let stopwatch;
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
btnContainer.addEventListener("click", function (e) {
  if (e.target.id === "start") {
    startBtn.disabled = true;
    startBtn.style.backgroundColor = "#76C1B3";
    stopBtn.disabled = false;
    stopBtn.style.backgroundColor = "#025949";
    stopwatch = setInterval(() => {
      value.sec += 1;
      if (value.sec > 59) {
        value.sec = 0;
        value.min += 1;
        if (value.min == 60) {
          value.min = 0;
          value.hour += 1;
        }
      }
      let result = `${value.hour < 10 ? "0" + value.hour : value.hour}:${
        value.min < 10 ? "0" + value.min : value.min
      }:${value.sec < 10 ? "0" + value.sec : value.sec}`;
      timerDiv.innerText = result;
    }, 1000);
  } else if (e.target.id === "stop") {
    stopBtn.disabled = true;
    stopBtn.style.backgroundColor = "#76C1B3";
    startBtn.disabled = false;
    startBtn.style.backgroundColor = "#025949";
    clearInterval(stopwatch);
  } else if (e.target.id === "reset") {
    clearInterval(stopwatch);
    value.hour = 0;
    value.min = 0;
    value.sec = 0;
    timerDiv.innerText = "00:00:00";
    startBtn.disabled = false;
    stopBtn.disabled = false;
    stopBtn.style.backgroundColor = "#025949";
    startBtn.style.backgroundColor = "#025949";
  }
});
