// 09-misc/01-waving-text/script.js - 9.1: waving text


(() => {
    function random(min, max) {
        return Math.trunc(Math.random() * (max - min) + min);
      }
    var txt = document.getElementById("target").innerHTML;
    var caract = txt.split("");
    document.getElementById("target").innerHTML = "";
    for (let i = 0; i < caract.length; i++) {
        const element = caract[i];
        var span = document.createElement("span");
        span.innerHTML = element;
        span.style.fontSize = random(20, 60)  + "px";
        document.getElementById("target").appendChild(span);
    }
})();
