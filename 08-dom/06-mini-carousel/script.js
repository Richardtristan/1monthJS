// 08-dom/06-mini-carousel/script.js - 8.6: mini carousel


(() => {

    let gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];
    var counter = 0;
    var target = document.querySelector(".material figure img")

    function next(){
        counter= counter +1;    
        if (counter > gallery.length -1){    
            counter = 0;    
        }            
        target.src = gallery[counter];
    }        

    document.getElementById("next").onclick=function(){
        next();
    }

})();
