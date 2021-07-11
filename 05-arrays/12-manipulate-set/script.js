// 05-arrays/12-manipulate-set/script.js - 5.12: manipulation of a Set


(() => {
    const fruits = new Set([
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grape",
        "cherry",
    ]);

    document.getElementById("run").onclick=function()
    {    
    fruits.delete("cherry");
    fruits.delete("apple")
    fruits.add("banana");
    fruits.add("Kiwi")
    console.log(fruits);
    }
})();
