import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const startBtn = document.querySelector("[data-start]");
const dayOn = document.querySelector("span[data-days]");
const hourOn = document.querySelector("span[data-hours]");
const minOn = document.querySelector("span[data-minutes]");
const secondOn =document.querySelector("span[data-seconds]");



// const date = new Date();
let timer = null;

let pickDate = 0;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

  onClose(selectedDates){

  pickDate = selectedDates[0]

    if (selectedDates[0] <= new Date()) {
Notiflix.Notify.failure("Please choose a date in the future");
startBtn.disabled =true;

}else{
startBtn.disabled = false;
}
  }
}

startBtn.addEventListener("click", createTimer);

function createTimer() {
    timer = setInterval(() => {

        startBtn.disabled = true;

        const currentTime = new Date();
        const finishTime = pickDate;
        const difference = finishTime - currentTime;

        const {days , hours, minutes,seconds} = convertMs(difference)
        dayOn.textContent =addLeadingZero(days);
        hourOn.textContent = addLeadingZero(hours);
        minOn.textContent = addLeadingZero(minutes);
        secondOn.textContent =addLeadingZero(seconds);

    if (difference <= 1000) {
      console.log(timer);
        clearInterval(timer);
        startBtn.disabled = false;  
        return;
        
    }
    },1000)
  } 




flatpickr('input#datetime-picker', options);

function addLeadingZero(value){
  return String(value).padStart(2,"0")
};
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
  


  