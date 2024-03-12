const hamburger = document.getElementById('toggle-btn')
const Togglemode = document.getElementById('toggle-mode')
const modeIcon = document.querySelector('#toggle-mode i')
const modeSpan = document.querySelector('#toggle-mode span')

hamburger.addEventListener('click', ()=>{
    document.getElementById('sidebar').classList.toggle('expand')
    document.querySelectorAll(".card-body").forEach((card)=>{
        card.classList.toggle('flex-col')
    })
})

Togglemode.addEventListener('click', ()=>{
     if(modeIcon.classList.contains('lni-night') && modeSpan.innerHTML === 'Dark'){
        modeIcon.classList.remove('lni-night')
        modeIcon.classList.add('lni-sun')
        modeSpan.innerHTML = 'Light'
        
     }else{
        modeIcon.classList.remove('lni-sun')
        modeIcon.classList.add('lni-night')
        modeSpan.innerHTML = 'Dark'
     }
     document.querySelector('body').classList.toggle('dark')
})





const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
  const progressValue = progressBar.querySelector(".percentage");
  const innerCircle = progressBar.querySelector(".inner-circle");
  let startValue = 0,
    endValue = Number(progressBar.getAttribute("data-percentage")),
    speed = 50,
    progressColor = progressBar.getAttribute("data-progress-color");

  const progress = setInterval(() => {
    startValue++;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = `${progressColor}`;

  

    progressBar.style.background = `conic-gradient(${progressColor} ${
      startValue * 3.6
    }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    if (startValue === endValue) {
      clearInterval(progress);
    }
  }, speed);
});

