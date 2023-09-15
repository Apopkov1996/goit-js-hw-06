const liElem = document.querySelectorAll('.item');
console.log(`Number of categories: ${liElem.length}`);
    
liElem.forEach((elem) => {
    let titleElem = elem.querySelector('h2');
    let itemElem = elem.querySelectorAll('li')

    console.log(`Category: ${titleElem.textContent} \n Elements: ${itemElem.length} `);
    
}
)

    
 


