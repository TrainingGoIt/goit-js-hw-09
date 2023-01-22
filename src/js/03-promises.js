import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector(".form");
const delayForm = document.querySelector(".delay");
const stepForm = document.querySelector(".step");
const amountForm = document.querySelector(".amount")

let position;
let delay;
let amount;
  

form.addEventListener("submit", (event) => {
  event.preventDefault();

  delay = Number(delayForm.value);
  amount = Number(amountForm.value);
  step = Number(stepForm.value);

  for (let i = 0; i < amount; i += 1) {
    position = i
    createPromise(position, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    
    delay += step 
  }
   
});


function createPromise(position, delay) {
  // console.log(position)
  // console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject("error");
      }
    }, delay);
  });
};


