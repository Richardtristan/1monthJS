// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    } 
    document.getElementById("run").onclick=function()
    {  
    let cat1 = new Cat("Skitty", 9);
    let cat2 = new Cat("Pixel", 7);

    console.log(cat1, cat2)
    }
})();
