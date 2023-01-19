
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
const audio = new Audio("https://zvukipro.com/uploads/files/2021-04/1618575190_show_time_out_01.mp3");

const fp = flatpickr(input,
  {
    "locale": Ukrainian,
    enableTime: true,
    minuteIncrement: 1,
    defaultDate: new Date(),
    minDate: "today",
    onClose(selectedDates) {
      timerId = setInterval( () => { 
        const timeNow = Date.now();
        const timeSelected = selectedDates[0].getTime();
        const miliseconds = timeSelected - timeNow;
        convertMs(miliseconds)
      }, 10);
      if (selectedDates[0] < Date.now()) {
         Notify.warning('Please choose a date in the future');
        }
        if (selectedDates[0] > Date.now()) {
          button.removeAttribute("disabled")
        }
  }
  });

        
button.addEventListener("click", handleClick);

function handleClick(event) {
  button.disabled = !event.target.checked;

  transferTimeToTimer()

  timerId = setInterval(() => { 
    transferTimeToTimer()
  }, 1000);

}

function transferTimeToTimer() {
   const timeLeft = JSON.parse(sessionStorage.getItem("time"));
   
    if ((Number(Object.values(timeLeft).join(""))) <= 0) {
      stopTimer()
    }
 
    daysSpan.textContent = timeLeft.days;
  
    hoursSpan.textContent = timeLeft.hours;

    minutesSpan.textContent = timeLeft.minutes;

  if (timeLeft.seconds < 0) {
      console.log("audio")
    stopTimer()
      Notify.warning('Please choose a date in the future and checked button "stop"');
    } else secondsSpan.textContent = timeLeft.seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function stopTimer() {
  clearInterval(timerId);
  console.log("audio")
  audio.play()
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days;
  if (Math.floor(ms / day) < 100) {
    days = addLeadingZero(Math.floor(ms / day));
  } else days = Math.floor(ms / day)
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  sessionStorage.setItem("time", JSON.stringify({ days, hours, minutes, seconds }))

}




 