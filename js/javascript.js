
const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');

let currentIndex = 76;
const width = 9
function moveFrog(e) {

    switch(e.key) {
        case 'ArrowLeft' :
            console.log('moved left');
            currentIndex -= 1;
            break
        case 'ArrowRight' :
            console.log('moved right');
            currentIndex += 1;
            break
        case 'ArrowUp' :
            console.log('moved up');
            currentIndex -= width;
            break
        case 'ArrowDown' :
            console.log('noved down');
            currentIndex += width;
            break

    }
    squares[currentIndex].classList.add('frog');
}
document.addEventListener('keyup', moveFrog)
