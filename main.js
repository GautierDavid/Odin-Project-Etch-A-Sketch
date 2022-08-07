let grid = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let resetButton = document.querySelector('.reset-button');
let rangeInput = document.querySelector('input[type=range]')


function initializeGrid() {
    console.log(rangeInput.value)
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
}

let mouseDown = false;
function changeColorOnClick(e) {
    let event = e.currentTarget;
    event.classList.add('black');
    mouseDown = true;
}

function changeMouseValue() {
    mouseDown = false
}

function changeColor(e) {
    let event = e.currentTarget;
    if(mouseDown === true) event.classList.add('black')
}



function resetColor() {
    let block = document.querySelectorAll('.block');
    block.forEach(el => el.classList.remove('black'))
}

rangeInput.addEventListener('DOMContentLoaded', initializeGrid)
rangeInput.addEventListener('change', initializeGrid)
resetButton.addEventListener('click', resetColor);
