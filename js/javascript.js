
const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76;
const width = 9
function moveFrog(e) {

    console.log('it work');
    squares[currentIndex].classList.add('frog');
}
document.addEventListener('keyup', moveFrog)
