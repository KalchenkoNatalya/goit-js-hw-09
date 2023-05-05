const refs = {
  buttonStart: document.querySelector('[data-start]'),
  buttonStop: document.querySelector('[data-stop]'),
};
refs.buttonStart.addEventListener('click', onClickStart);
refs.buttonStop.addEventListener('click', onClickStop);
let timerId = null;

function onClickStart() {
  timerId = setInterval(changeColor, 1000);
  refs.buttonStart.setAttribute('disabled', true);
}

function onClickStop() {
  clearInterval(timerId);
  refs.buttonStart.removeAttribute('disabled');
}

function changeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
