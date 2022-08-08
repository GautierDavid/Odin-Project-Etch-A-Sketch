let grid = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let resetButton = document.querySelector('.reset-button');
let rangeInput = document.querySelector('input[type=range]');
let colorInput = document.querySelector('input[type=color');
let labelSize = document.querySelector('#label-size');
let randomButton = document.querySelector('.button-random-color');
let darkerButton = document.querySelector('.darker-button');
let lighterButton = document.querySelector('.lighter-button');

// let darkerButtonState = false;
// let lighterButtonState = false;
let mouseDown = false;
let randomButtonStatus = false;
let color = colorInput.value;


function initializeGrid() {
    
    grid.innerHTML = ``;
    for(let i = 1; i <= rangeInput.value * rangeInput.value; i++) {
        let div = document.createElement('div');
        div.classList.add('block');
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColorOnClick)
        div.addEventListener('mouseup', changeMouseValue)
        grid.appendChild(div);
    }
    let widthBlock = 100 / rangeInput.value;
    root.style.setProperty('--number-of-block', `${widthBlock}%`)
    labelSize.textContent = `${rangeInput.value} x ${rangeInput.value}`
}


function changeColorOnClick(e) {
    let event = e.currentTarget;
    if(randomButtonStatus) {
        let randomRed = randomTo255();
        let randomGreen = randomTo255();
        let randomBlue = randomTo255();
        event.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 1)`;
    } else event.style.backgroundColor = color;

    mouseDown = true;
}

function changeMouseValue() {
    mouseDown = false;
}

function changeColor(e) {
    let event = e.currentTarget;
    if(mouseDown){
        if(randomButtonStatus){
            let randomRed = randomTo255();
            let randomGreen = randomTo255();
            let randomBlue = randomTo255();
            event.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 1)`;
        } else if (mouseDown === true) event.style.backgroundColor = color;
    }
}



function randomTo255() {
    return Math.floor(Math.random()*255);
}



function randomButtonStatusChange() {
    if(randomButtonStatus) {
        randomButtonStatus = false;
        randomButton.textContent = "Active Random Color";
    } else {
        randomButtonStatus = true
        randomButton.textContent = "Deactive Random Color";
    }
}

// function darkerButtonStateChange() {
//     if(darkerButtonState) {
//         darkerButtonState = false;
//         darkerButton.textContent = "Active";
//     } else {
//         darkerButtonState = true
//         lighterButtonState = false;
//         randomButtonStatus = false
//         darkerButton.textContent = "Deactive";
//     }
// }

// function lightherButtonStateChange() {
//     if(lighterButtonState) {
//         lighterButtonState = false;
//         lighterButton.textContent = "Active";
//     } else {
//         lighterButtonState = true
//         darkerButtonState = false;
//         randomButtonStatus = false;
//         lighterButton.textContent = "Deactive";
//     }
// }

function resetColor() {
    let block = document.querySelectorAll('.block');
    block.forEach(el => el.style.backgroundColor = "rgba(255, 255, 255)")
}


document.addEventListener('DOMContentLoaded', initializeGrid)
rangeInput.addEventListener('change', initializeGrid)
resetButton.addEventListener('click', resetColor);
randomButton.addEventListener('click', randomButtonStatusChange);
colorInput.addEventListener('input', function() {
    color = colorInput.value;
    rangeInput.style.accentColor = color;
})
// darkerButton.addEventListener('click', darkerButtonStateChange);
// lighterButton.addEventListener('click', lightherButtonStateChange);
