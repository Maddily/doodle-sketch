const container = document.querySelector('.container');
const mainFragment = document.createDocumentFragment();
let gridSize = 16;

//Add horizontal containers into the main container
for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('horizontal-container');
    mainFragment.appendChild(div);
}

container.appendChild(mainFragment);

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

let horizontalContainers = document.querySelectorAll('.horizontal-container');

horizontalContainers.forEach(appendChildFragment);

let childDiv = document.querySelectorAll('.child-div');

function listenForHover(div) {
    div.addEventListener('mouseenter', () => div.style.backgroundColor = 'black');
}

childDiv.forEach(listenForHover);

const button = document.createElement('button');

document.body.insertBefore(button, container);

button.textContent = 'Change Grid Size';

function changeGridSize() {
    const newGridSize = parseInt(prompt('How many squares per side?\n(Choose a number up to 100)', 0));
    if (newGridSize <= 100 && newGridSize >= 1) {
        gridSize = newGridSize;
        container.innerHTML = '';
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
    else {
        alert(`${newGridSize} is not between 1 and 100.`);
    }
}

button.addEventListener('click', changeGridSize);