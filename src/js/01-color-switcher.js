function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

stopBtn.addEventListener("click",stopChangeColor);
startBtn.addEventListener("click", changeColor);
let timerId = null;


  function changeColor(){
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    },1000)
    
  
  }

  function stopChangeColor(){
    clearInterval(timerId);
    startBtn.disabled =false;
    stopBtn.disabled = true;

  }

  





