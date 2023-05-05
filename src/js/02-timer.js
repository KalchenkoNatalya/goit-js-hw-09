import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';

const refs = {
  buttonStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
refs.buttonStart.setAttribute('disabled', true);

let todayDate = Date.now();
let differenceTime = 0;
let selectedDateInput = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDateInput = selectedDates[0].getTime();
    if (selectedDateInput < todayDate) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      refs.buttonStart.removeAttribute('disabled');
    }
  },
};

const myInput = document.querySelector('#datetime-picker');
const fp = flatpickr(myInput, options);

refs.buttonStart.addEventListener('click', onClickStart);
function onClickStart() {
  const timeLeft = setInterval(currentTime, 1000);
}

function currentTime() {
  let timeNow = Date.now();
  differenceTime = selectedDateInput - timeNow;
  console.log(differenceTime);
  const { days, hours, minutes, seconds } = convertMs(`${differenceTime}`);
  console.log(`${days}:${hours}:${minutes}:${seconds}`);
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${minutes}`;
  refs.seconds.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart('2', 0);
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); //
