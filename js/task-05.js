
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('name-output');

inputEl.addEventListener('input', getInputEl);

function getInputEl(e) {
    spanEl.textContent = inputEl.value !== ''
        ? e.currentTarget.value
        : 'Anonymous';
}