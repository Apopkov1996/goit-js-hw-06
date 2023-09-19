
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', fontSize);

function fontSize(e) {
    textEl.style.fontSize = e.currentTarget.value + 'px';
}

