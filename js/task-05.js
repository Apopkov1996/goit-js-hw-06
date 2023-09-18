
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', getInputEl);


function getInputEl() {
    if (inputEl.value !== '') {
        spanEl.textContent = inputEl.value;
    } else {
        'Anonymous'
    }
}