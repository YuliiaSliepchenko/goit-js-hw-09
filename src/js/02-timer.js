import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtn = document.querySelector("[data-start]");
const flatPickr = document.querySelector("#datetime-picker");

const date = new Date();
let selectedDates = [];



function onClose(selectedDates, dateStr, instance){
    if (selectedDates < date){
        window.alert("Please choose a date in the future");
      }
      else if (selectedDates >  date) {
        startBtn.disabled = false;
      }
 }
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      
    },
  };
flatpickr(flatPickr, options);