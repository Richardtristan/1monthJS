// 05-arrays/13-find-in-set/script.js - 5.13: Find in a Set


(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);
    document.getElementById("run").onclick=function()
    {    
console.log(people.size)
console.log("Alexandre est dans le set ? : " + (people.has("Alexandre") ? "oui" : "non"))

    }
})();
