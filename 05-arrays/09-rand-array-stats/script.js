// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        var array = [];
        for (let i = 1; i < 11; i++) {
            var randomNUmber = Math.ceil(Math.random() * 100);
            document.getElementById("n-"+i).innerHTML = randomNUmber;
            array.push(randomNUmber);
            
        }
        var min = Math.min(...array);
        var max = Math.max(...array);

        var sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
            
        }
        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = sum / array.length;
    });
})();
