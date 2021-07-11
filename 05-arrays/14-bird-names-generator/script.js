// 05-arrays/14-bird-names-generator/script.js - 5.14: Bird names generator in French


(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").onclick=function()
    {    
        get_random = function (list) {
            return list[Math.floor((Math.random()*list.length))];
          } 
let bird = get_random(birds)

let adj = get_random(Array.from(adjectives))

console.log("l"+ (bird.fem ? "a" : "e") + " " + bird.name + " " + adj + (bird.fem ? "e" : ""))
    }
})();
