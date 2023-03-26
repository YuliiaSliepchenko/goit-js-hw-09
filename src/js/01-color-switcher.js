function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");

let timerId = null;


  function changeColor(){
    document.body.style.backgroundColor = getRandomHexColor();
   
   
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }

  function stopChangeColor(){
    clearInterval(timerId);

    startBtn.disabled =false;
    stopBtn.disabled = true;

  }

  startBtn.addEventListener("click", () => timerId = setInterval(changeColor,1000));



stopBtn.addEventListener("click",stopChangeColor);

