const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulElem = document.querySelector('.gallery');

const imgElem = images.map((el) => 
  
  `<li class = "item-gallery"> 
  <img class = "img-gallery" src = "${el.url}" alt = "${el.alt}">
  </li>`
    
  )
  .join("");

ulElem.insertAdjacentHTML('beforeend', imgElem);

const imgGallery = document.querySelectorAll("img");

imgGallery.forEach(el => el.style.width = "150px");
imgGallery.forEach(el => el.style.height = "100px")


ulElem.style.display = "flex";
// ulElem.style.flex-wrap = "wrap";
ulElem.style.gap = "30px";

 








