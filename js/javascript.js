
const timeLeftDisplay = document.querySelector('#time-left');
const resultDisplay = document.querySelector('#result');
const startPauseButton = document.querySelector('#start-pause-button');
const squares = document.querySelectorAll('.grid div');
const logsleft = document.querySelectorAll('.log-left');
const logsRight = document.querySelectorAll('.log-right');

let currentIndex = 76;
const width = 9

function moveFrog(e) {
    squares[currentIndex].classList.remove('frog');

    switch(e.key) {
        case 'ArrowLeft' :
            console.log('moved left');
            if(currentIndex % width !== 0) currentIndex -= 1;
            break
        case 'ArrowRight' :
            console.log('moved right');
            if(currentIndex % width < width - 1) currentIndex += 1;
            break
        case 'ArrowUp' :
            console.log('moved up');
            if(currentIndex - width >= 0) currentIndex -= width;
            break
        case 'ArrowDown' :
            console.log('moved down');
            if(currentIndex + width < width * width) currentIndex += width;
            break

    }
    squares[currentIndex].classList.add('frog');
}
document.addEventListener('keyup', moveFrog)


function autoMoveLogs() {
    logsleft.forEach(logLeft => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains('l1') :
             logLeft.classList.remove('l1');
             logLeft.classList.add('l2');
            break
        case logLeft.classList.contains('l2') :
             logLeft.classList.remove('l2');
             logLeft.classList.add('l3');
            break
        case logLeft.classList.contains('l3') :
             logLeft.classList.remove('l3');
             logLeft.classList.add('l4');
            break
        case logLeft.classList.contains('l4') :
             logLeft.classList.remove('l4');
             logLeft.classList.add('l5');
            break
        case logLeft.classList.contains('l5') :
             logLeft.classList.remove('l5');
             logLeft.classList.add('l1');
            break

    }
}



function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains('l1') :
             logRight.classList.remove('l1');
             logRight.classList.add('l5');
            break
        case logRight.classList.contains('l2') :
             logRight.classList.remove('l2');
             logRight.classList.add('l1');
            break
        case logRight.classList.contains('l3') :
             logRight.classList.remove('l3');
             logRight.classList.add('l2');
            break
        case logRight.classList.contains('l4') :
             logRight.classList.remove('l4');
             logRight.classList.add('l3');
        break
        case logRight.classList.contains('l5') :
             logRight.classList.remove('l5');
             logRight.classList.add('l4');
            break

    }
}


setInterval(autoMoveLogs, 1000);