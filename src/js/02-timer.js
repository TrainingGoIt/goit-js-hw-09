
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/material_blue.css";
import { Ukrainian } from "flatpickr/dist/l10n/uk.js"

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const button = document.querySelector("[data-start]");
const input = document.querySelector("#datetime-picker");
const daysSpan = document.querySelector("[data-days]");
const hoursSpan = document.querySelector("[data-hours]");
const minutesSpan = document.querySelector("[data-minutes]");
const secondsSpan = document.querySelector("[data-seconds]");
let timerId = null;

const fp = flatpickr(input,
  {
    "locale": Ukrainian,
    enableTime: true,
    minuteIncrement: 1,
    defaultDate: new Date(),
    minDate: "today",
    onClose(selectedDates) {
      timerId = setInterval(() => { 
        const timeNow = new Date();
        const timeSelected = selectedDates[0].getTime();
        const miliseconds = timeSelected - timeNow;
        convertMs(miliseconds)
      }, 10);
      if (selectedDates[0] < new Date()) {
         Notify.warning('Please choose a date in the future');
        }
        if (selectedDates[0] > new Date()) {
          button.removeAttribute("disabled")
        }
  }
  });

        
button.addEventListener("click", handleClick);

function handleClick(event) {
  button.disabled = !event.target.checked;

  timerId = setInterval(() => { 
    const timeLeft = JSON.parse(sessionStorage.getItem("time"));
   
    if ((Number(Object.values(timeLeft).join(""))) <= 0) {
      stopTimer()
    }
   
    if (timeLeft.days < 10) {
      // daysSpan.textContent = "0"+timeLeft.days;
      daysSpan.textContent = timeLeft.days.toString().padStart(2, '0');
    } else daysSpan.textContent = timeLeft.days;
  
    if (timeLeft.hours < 10) {
      // hoursSpan.textContent = "0" + timeLeft.hours;
      hoursSpan.textContent = timeLeft.hours.toString().padStart(2, '0');
    }else hoursSpan.textContent = timeLeft.hours;

    if (timeLeft.minutes < 10) { 
    // minutesSpan.textContent = "0"+ timeLeft.minutes;
        minutesSpan.textContent = timeLeft.minutes.toString().padStart(2, '0');
    } else minutesSpan.textContent = timeLeft.minutes;

    if (timeLeft.seconds < 10 && timeLeft.seconds>0) {
      // secondsSpan.textContent = "0" + timeLeft.seconds;
      secondsSpan.textContent = timeLeft.seconds.toString().padStart(2, '0');
    } else if (timeLeft.seconds < 0) {
      stopTimer()
      Notify.warning('Please choose a date in the future and checked button "stop"');
    } else secondsSpan.textContent = timeLeft.seconds;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerId);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  sessionStorage.setItem("time", JSON.stringify({ days, hours, minutes, seconds }))

}




 