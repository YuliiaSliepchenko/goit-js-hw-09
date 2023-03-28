import { Notify } from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css'

const refs = {form : document.querySelector('form'),
}



refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  const values = {
  amount:Number(evt.target.elements.amount.value),
  firstDelay:Number(evt.target.elements.delay.value),
  stepDelay:Number(evt.target.elements.step.value),
};
let {amount,  firstDelay,  stepDelay } = values;
for(i = 1; i <= amount; i +=1){

  createPromise(i, firstDelay)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  firstDelay += stepDelay;  
}
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
return new Promise((resolve, reject) => { 
  setTimeout(()=> { 
    if (shouldResolve) {
    // Fulfill
    resolve({position, delay})
  } else {
    // Reject
    reject({position , delay});
  }},delay)
 });
 
}

