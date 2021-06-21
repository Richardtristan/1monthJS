
// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    document.getElementById("run").onclick=function()
    {
        var x, y, z, random_col;
        x = Math.round(Math.random()*256);
        y = Math.round(Math.random()*256);
        z = Math.round(Math.random()*256);
        random_col = 'rgb('+x+','+y+','+z+')';

        document.body.style.backgroundColor = random_col;
    }

})();
