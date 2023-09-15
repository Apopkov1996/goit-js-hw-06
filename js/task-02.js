const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulElem = document.querySelector('#ingredients');



const ingredient = ingredients.map((el) => {
  
  const liElem = document.createElement('li');
  liElem.textContent = el;
  liElem.classList.add('title')
  return liElem

}
);

ulElem.append(...ingredient);


