
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector('#value');

let counterValue = 0;

decrementEl.addEventListener('click', onDecrementElClik);
incrementEl.addEventListener('click', onIncrementElClick);

function onDecrementElClik() {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

function onIncrementElClick() {

    counterValue += 1;
    spanEl.textContent = counterValue;

}

    
