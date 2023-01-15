// Напиши скрипт, який після натискання кнопки «Start», 
// раз на секунду змінює колір фону < body > на випадкове значення,
//     використовуючи інлайн стиль.Натисканням на кнопку «Stop»
//      зміна кольору фону повинна зупинятися.

// УВАГА
// Враховуй, що на кнопку «Start» можна натиснути нескінченну
//  кількість разів.Зроби так, щоб доки зміна теми запущена,
//     кнопка «Start» була неактивною(disabled).

// Для генерування випадкового кольору використовуй функцію
// getRandomHexColor.

// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
// }

const start = document.querySelector(".btn_start");
const stop = document.querySelector(".btn_stop");
const body = document.querySelector("body");

const handleClickStart = (event) => {
    console.log("start")
    start.disabled = !event.target.checked;
    stop.disabled = event.target.checked;

    timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
  }, 1000);

    

}

start.addEventListener('click', handleClickStart)


const handleClickStop = (event) => {
    console.log("stop")
    clearInterval(timerId);
    stop.disabled = !event.target.checked;
    start.disabled = event.target.checked;
}

stop.addEventListener('click', handleClickStop)


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}

