// http://websamuraj.pl/examples/js/projekt11/
const start = document.querySelector('.main');
const reset = document.querySelector('.reset');
let watchDisplay = document.querySelector('.time div');

let time = 0;
let active = false;
let intervalId;

const startWatch = () => {
    time++;
    watchDisplay.textContent = (time / 100).toFixed(2);
}


const count = () => {
    if (!active) {
        active = true;
        start.textContent = "Pauza";
        intervalId = setInterval(startWatch, 10)
    } else {
        active = !active;
        start.textContent = "Start";
        clearInterval(intervalId);
    }

}

const resetWatch = () => {
    time = 0;
    watchDisplay.textContent = '---';
    clearInterval(intervalId);
    active = false;
    start.textContent = "Start";
}

start.addEventListener('click', count);
reset.addEventListener('click', resetWatch);