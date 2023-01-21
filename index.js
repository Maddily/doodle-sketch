const container = document.querySelector('.container');
const mainFragment = document.createDocumentFragment();

//Add horizontal containers into the main container
for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add('horizontal-container');
    mainFragment.appendChild(div);
}

container.appendChild(mainFragment);

// Add child divs into horizontal containers
function appendChildFragment(horizontalContainer) {
    const childFragment = document.createDocumentFragment();
    for (let i = 1; i < 17; i++) {
        const div = document.createElement('div');
        div.classList.add('child-div');
        childFragment.appendChild(div);
    }
    horizontalContainer.appendChild(childFragment);
}

const horizontalContainers = document.querySelectorAll('.horizontal-container');

horizontalContainers.forEach(appendChildFragment);

const childDiv = document.querySelectorAll('.child-div');