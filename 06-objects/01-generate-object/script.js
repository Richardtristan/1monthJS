// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").onclick=function()
    {  
    let moi = {
        firstname :  "Tristan",
        lastname : "Richard",
        age : 27,
        city : "Soignies",
        country : "Belgium"
    }
    console.log(moi)
}
})();
