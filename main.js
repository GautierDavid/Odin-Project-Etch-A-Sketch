let grid = document.querySelector('.grid-container');
let root = document.querySelector(':root');
let resetButton = document.querySelector('.reset-button');
let rangeInput = document.querySelector('input[type=range]')
let labelSize = document.querySelector('#label-size')
let randomButton = document.querySelector('.button-random-color');

let mouseDown = false;
let randomButtonStatus = false;


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
        let randomRed = Math.floor(Math.random()*255);
        let randomGreen = Math.floor(Math.random()*255);
        let randomBlue = Math.floor(Math.random()*255);
        event.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 1)`;
    } else event.style.backgroundColor = "black";

    mouseDown = true;
}

function changeMouseValue() {
    mouseDown = false
}

function changeColor(e) {
    let event = e.currentTarget;
    if(mouseDown && randomButtonStatus){
        let randomRed = Math.floor(Math.random()*255);
        let randomGreen = Math.floor(Math.random()*255);
        let randomBlue = Math.floor(Math.random()*255);
        event.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 1)`;
    } else if (mouseDown === true)event.style.backgroundColor = "black";
}

function randomButtonStatusChange() {
    if(randomButtonStatus) randomButtonStatus = false
    else randomButtonStatus = true
}

function resetColor() {
    let block = document.querySelectorAll('.block');
    block.forEach(el => el.style.backgroundColor = "white")
}


document.addEventListener('DOMContentLoaded', initializeGrid)
rangeInput.addEventListener('change', initializeGrid)
resetButton.addEventListener('click', resetColor);
randomButton.addEventListener('click', randomButtonStatusChange);
