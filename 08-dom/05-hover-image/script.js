// 08-dom/05-hover-image/script.js - 8.5: image hover


(() => {

    let img = document.querySelector('img');
    let start = img.src;
    let hover = img.getAttribute('data-hover'); 

img.onmouseover = function() {
    img.src = hover;
    
}
img.onmouseout = function () {
    img.src = start; 
}


})();
