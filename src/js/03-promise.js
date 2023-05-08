import Notiflix from 'notiflix';

const formSubmit = document.querySelector('.form');

formSubmit.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  let delay = Number(event.currentTarget.elements.delay.value);
  // let delayTime = formSubmit.delay.value
  let stepTime = Number(event.currentTarget.elements.step.value);
  let amountTime = Number(event.currentTarget.elements.amount.value);
 
  for (let position = 1; position <= amountTime; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) =>
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      )
      .catch(({ position, delay }) =>
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      );
    delay += stepTime
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const object = {position, delay};
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(object);
      } else {
        // Reject
        reject(object);
      }
    }, delay);
  });
}

