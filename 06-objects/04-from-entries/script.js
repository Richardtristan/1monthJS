// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    document.getElementById("run").onclick=function()
    {    
let arr = [];
for (let i = 0; i < keys.length; i++) {
    const element = [ keys[i], values[i] ];
    arr.push(element);
}
    let obj = Object.fromEntries(arr);
        console.log(obj);

    }
})();
