//07-classes/02-methods/script.js - 7.2: methods


(() => {
    class Person {
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
}
    }
    document.getElementById("run").onclick=function()
    {  
    let me = new Person("Richard", "Tristan");

console.log("Hello, " + me.firstname + " " + me.lastname);

    }
})();
