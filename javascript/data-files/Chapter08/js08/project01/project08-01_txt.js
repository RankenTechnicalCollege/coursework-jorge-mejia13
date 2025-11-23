"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: 
      Date:   

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/
function Timer(min, sec) {
      this.minutes = min,
      this.seconds = sec,
      this.timeID = null
}

Timer.prototype.runPause = function(timer, minBox, setBox) {
      if (timer.timeID) {
            window.clearInterval(timer.timeID)
            timer.timeID = null
      } else {
            timer.timeID = window.setInterval(countDown, 1000)
      }

      function countDown() {
            if (timer.seconds > 0) {
                  timer.seconds -= 1
            } else if (timer.minutes > 0) {
                  timer.minutes -= 1
                  timer.seconds = 59
            } else {
                  window.clearInterval(timer.timeID)
                  timer.timeID = null
            }

            minBox.value = timer.minutes
            setBox.value = timer.seconds
      }
}






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

let myTimer = new Timer(minBox.value, secBox.value)

minBox.addEventListener("onchange", function() {
      myTimer.minutes = minBox.value
})

secBox.addEventListener("onchange", function() {
      myTimer.seconds = secBox.value
})

runPauseTimer.addEventListener('click', function() {
      myTimer.runPause(myTimer, minBox, secBox)
})