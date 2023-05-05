import 'flatpickr/dist/flatpickr.min.css';
import flatpickr from 'flatpickr';
const buttonStart = document.querySelector('[data-start]');

buttonStart.setAttribute('disabled', true);
const todayDate = new Date().getTime();
console.log(todayDate);

let differenceTime = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDates = selectedDates[0].getTime();
    console.log(selectedDates);
    differenceTime = selectedDates - todayDate;
    console.log(differenceTime);

    if (selectedDates < todayDate) {
      alert('Please choose a date in the future');
    } else {
      buttonStart.removeAttribute('disabled');
    }
  },
};

const myInput = document.querySelector('#datetime-picker');
const fp = flatpickr(myInput, options);

buttonStart.addEventListener('click', onClickStart);
function onClickStart() {}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); //
console.log(convertMs(`${differenceTime}`)); //
