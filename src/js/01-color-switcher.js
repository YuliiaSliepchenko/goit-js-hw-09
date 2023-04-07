function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

stopBtn.addEventListener("click",stopChangeColor);
startBtn.addEventListener("click", changeColor);
let timerId = null;
stopBtn.disabled = true;


  function changeColor(){
    disablableBtn()
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    },1000)
    
  
  }

  function stopChangeColor(){
    clearInterval(timerId);
    disablableBtn()
  }

  function disablableBtn() {
  if(!startBtn.disabled && stopBtn.disabled){
  startBtn.disabled = true;
  stopBtn.disabled = false;
  } else {
    startBtn.disabled =false;
    stopBtn.disabled = true;
  }
}




