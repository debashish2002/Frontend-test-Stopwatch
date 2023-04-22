// define variables
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

// get elements from HTML
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisecondsEl = document.getElementById("milliseconds");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const resetBtn = document.getElementById("reset-btn");

// start button event listener
startBtn.addEventListener("click", function() {
  // clear any previous intervals
  clearInterval(interval);

  // start the stopwatch interval
  interval = setInterval(function() {
    // increment milliseconds
    milliseconds += 10;
    
    // update the display
    if (milliseconds === 1000) {
      milliseconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    millisecondsEl.innerText = milliseconds.toString().padStart(3, "0");
    secondsEl.innerText = seconds.toString().padStart(2, "0");
    minutesEl.innerText = minutes.toString().padStart(2, "0");
  }, 10);
});

// stop button event listener
stopBtn.addEventListener("click", function() {
  // clear the stopwatch interval
  clearInterval(interval);
});

// reset button event listener
resetBtn.addEventListener("click", function() {
  // clear the stopwatch interval and reset the values
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  millisecondsEl.innerText = "000";
  secondsEl.innerText = "00";
  minutesEl.innerText = "00";
});
