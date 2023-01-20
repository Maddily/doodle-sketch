const container = document.querySelector('.container');
const mainFragment = document.createDocumentFragment();
const childFragment = document.createDocumentFragment();

for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add('horizontal-container');
    mainFragment.appendChild(div);
}

container.appendChild(mainFragment);