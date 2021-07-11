// 08-dom/04-attr-create/script.js - 8.4: manipulating attributes and creating elements


(() => {

    

        var monImage = document.createElement('img');
    
        monImage.src = "http://www.randomkittengenerator.com/cats/rotator.php";
    
        var maDiv = document.getElementById("target");
    
        maDiv.appendChild(monImage);
        var el = document.getElementById("source");
        el.remove();
    
})();
