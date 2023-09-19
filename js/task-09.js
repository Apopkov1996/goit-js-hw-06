function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const textColor = document.querySelector('.color');
const changeColorBtn = document.querySelector('.change-color');
const body = document.body;

changeColorBtn.addEventListener('click', changeColor);



const changeColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};
