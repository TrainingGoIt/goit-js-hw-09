function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

const form = document.querySelector(".form");
const button = document.querySelector("button");
const delay = document.querySelector(".delay");
const step = document.querySelector(".step");
const amount = document.querySelector(".amount")


// Напиши скрипт, який на момент сабміту форми викликає функцію
// createPromise(position, delay) стільки разів, скільки ввели в
// поле amount.Під час кожного виклику передай їй номер промісу(position),
//   що створюється, і затримку, враховуючи першу затримку(delay), введену
// користувачем, і крок(step).

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

