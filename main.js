let grid = document.querySelector('.grid-container');
let gridSize = parseInt(prompt("Which size do you want"))
let block = document.querySelectorAll('.block');

for(let i = 1; i <= gridSize * gridSize; i++) {
    let div = document.createElement('div');
    // block.style.flexBasis = `calc(100% / ${gridSize})`;
    div.classList.add('block');
    grid.append(div);
}




function changeColor(e) {
    let event = e.currentTarget;
    console.log(e, e.currenttarget)
    event.classList.add('black');
}


block.forEach(element => element.addEventListener('mouseover', function(e) {changeColor(e)}));
