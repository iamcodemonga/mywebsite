const productContainers = [...document.querySelectorAll('.product-container')];
const nextbtn = [...document.querySelectorAll('.nextbtn')];
const prevbtn = [...document.querySelectorAll('.prevbtn')];

productContainers.forEach((item, i) => {
    // let containerDimentions = item.getBoundingClientRect();
    // let containerWidth = containerDimentions.width;
    let containerWidth = 390;
    
    nextbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });
    
    prevbtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});