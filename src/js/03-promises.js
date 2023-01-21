

const form = document.querySelector(".form");
const button = document.querySelector("button");
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
    createPromise(position, delay)
    delay += step 
  }
   
});


function createPromise(position, delay) {
  console.log(position)
  console.log(delay);
  const promise = new Promise((resolve) => {
    setInterval(() => {
    // resolve({"position" : position, "delay": delay})
      resolve({ position, delay })
    })
  }, delay)

//  const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }


  promise.then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

};




//!----------------------------------------------

// Доповни код функції createPromise таким чином,
//   щоб вона повертала один проміс, який виконується або
//    відхиляється через delay часу.Значенням промісу повинен бути
//     об'єкт, в якому будуть властивості position і delay зі значеннями
//      однойменних параметрів.Використовуй початковий код функції для
//       вибору того, що потрібно зробити з промісом - виконати або відхилити.

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// Бібліотека повідомлень (не обов'язковий)

// Для відображення повідомлень користувачеві,
//   замість console.log(), використовуй бібліотеку notiflix.

