// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
        arr = [];
        for (let i = 0; i < fruits.length; i++) {
            if (fruits[i] > 0) {
                arr.push(fruits[i]);
            }
        }
        const filteredArray = fruits.filter(function(ele , pos){
            return fruits.indexOf(ele) == pos;
        }) 
        console.log(filteredArray);
    });

})();
