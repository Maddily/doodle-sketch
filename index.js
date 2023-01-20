const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();

for (let i = 1; i < 17; i++) {
    const div = document.createElement('div');
    div.classList.add('horizontal-container');
}