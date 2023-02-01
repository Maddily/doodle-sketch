const title = document.createElement('h1');
title.textContent = 'Doodle-Sketch';
const middle = document.createElement('div');
middle.classList.add('middle');
const container = document.querySelector('.container');
const mainFragment = document.createDocumentFragment();
let horizontalContainers;
let childDiv;
let gridSize = 16;

function fillGrid() {
    //Add horizontal containers into the main container
    for (let i = 1; i <= gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('horizontal-container');
        mainFragment.appendChild(div);
    }

    container.appendChild(mainFragment);

    horizontalContainers = document.querySelectorAll('.horizontal-container');
    horizontalContainers.forEach(appendChildFragment);

    childDiv = document.querySelectorAll('.child-div');
    childDiv.forEach(listenForHover);
}

fillGrid();

// Add child divs into horizontal containers
function appendChildFragment(horizontalContainer) {
    const childFragment = document.createDocumentFragment();
    for (let i = 1; i <= gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('child-div');
        childFragment.appendChild(div);
    }
    horizontalContainer.appendChild(childFragment);
}

// Return a random number between two numbers;
function randomrgb(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function listenForHover(div) {
    div.addEventListener('mouseenter', () => {
        const r = randomrgb(0, 255);
        const g = randomrgb(0, 255);
        const b = randomrgb(0, 255);
        const randomColor = `rgb(${r}, ${g}, ${b})`;    
        div.style.backgroundColor = randomColor;
    });
}

const buttonsDiv = document.createElement('div');
buttonsDiv.classList.add('buttons');

const gridSizeButton = document.createElement('button');
gridSizeButton.classList.add('size-button');
gridSizeButton.textContent = 'Change Grid Size';

const resetButton = document.createElement('button');
resetButton.classList.add('reset');
resetButton.textContent = 'Reset';

buttonsDiv.appendChild(gridSizeButton);
buttonsDiv.appendChild(resetButton);
document.body.insertBefore(buttonsDiv, container);

resetButton.addEventListener('click', () => childDiv.forEach((div) => div.style.backgroundColor = '#ddd3c8'));

function changeGridSize() {
    const newGridSize = parseInt(prompt('How many squares per side?\n(Choose a number between 1 and 100)', 0));
    if (newGridSize <= 100 && newGridSize >= 1) {
        gridSize = newGridSize;
        container.innerHTML = '';
        fillGrid();
    }
    else {
        alert(`${newGridSize} is not between 1 and 100.`);
    }
}

gridSizeButton.addEventListener('click', changeGridSize);
