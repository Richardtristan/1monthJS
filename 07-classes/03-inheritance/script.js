// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    document.getElementById("run").onclick=function()
    {  
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal{
        static greeting = "hello";
        constructor(name){
            super();
            this.name = name;
        }
    }

    class Cat extends Animal{
        static greeting = "hello";
        constructor(name){
            super();
            this.name = name;
        }
    }
    let dog = new Dog("Dogs");
    let cat = new Cat("Cat");
    console.log(dog.sayHello())
    console.log(cat.sayHello())
}
})();
