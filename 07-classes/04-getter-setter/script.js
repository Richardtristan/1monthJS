// 07-classes/04-getter-setter/script.js - 7.4: getter & setter


(() => {
    class Person {

        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }

        get name() {
            return this.firstname + " " + this.lastname;
        }
        
        set name(newvalue){
            let newvaluesplit = newvalue.split(" ")
            this.firstname = newvaluesplit[0];
            this.lastname =  newvaluesplit[1];
        }
    }

    document.getElementById("run").onclick=function()
    {  
        
    const me = new Person("Tristan", "Richard");
    
    console.log(me.name);
    me.name = "Claude Richardo";
    console.log(me.name);    

}
})();
