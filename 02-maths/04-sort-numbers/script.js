// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        var list = document.getElementById("numbers").value;
        var total = list.split(",");
        const points = [];
        for (let i = 0; i < total.length; i++){
            let num = total[i];
            points.push(Number(num));
        }
        
        points.sort(function(a, b){return a - b});
alert(points);
    });

})();
