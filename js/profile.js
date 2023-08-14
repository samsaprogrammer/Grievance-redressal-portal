let circularProgress = document.querySelector(".circular-progress-1"),
    progressValue = document.querySelector(".progress-value-1");

let progressStartValue = 0,
    ProgressEndValue = 90,
    speed = 100;


let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(#ff4500 ${progressStartValue * 3.6}deg, #ededed 0deg)`

    if(progressStartValue == ProgressEndValue){
        clearInterval(progress);
    }
}, speed);