  
// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        var array = [];
        for (let a = 1; a < 11; a++) {
            var randomNUmber = Math.ceil(Math.random() * 100);
            document.getElementById("n-" + a).innerHTML = randomNUmber;
            array.push(randomNUmber);
            
        }
        let min = Math.min(...array);
        let max = Math.max(...array);
        let sum = 0;
        for (let a = 0;  a < array.length; a++) {
            sum = sum + array[a];
        }
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / array.length;
    });
})();