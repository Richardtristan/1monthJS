// 09-misc/02-typewriter-effect/script.js - 9.2: typewriter effect


(() => {
    var target = document.getElementById("target");
    var txt = target.innerHTML;
    var caract = txt.split("");
    target.innerHTML = "";
    var count = 0;
    
    var inter = setInterval(() => { 
    target.innerHTML = target.innerHTML + caract[count];

        count++;
        if (count>= caract.length){
            clearInterval(inter);
        }
    }, 100);

    
})();
