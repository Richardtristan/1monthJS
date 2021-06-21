
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    function maFonction()
    {
        var valeur = prompt(" Donnes ton age ");


        var valeur1 = prompt(" Donnes ton genre ");
    
        
        var valeur2 = prompt(" Ou vis tu? ");
    

    var confirmation = confirm("ces valeurs sont correctes?" + " " + valeur + " " + valeur1 + " " + valeur2);
    
    if(confirmation == true){
     alert("Super");
    }
    if(confirmation == false){
        alert("On recommence");
        var valeur = prompt(" Donnes ton age ");


        var valeur1 = prompt(" Donnes ton genre ");
    
        
        var valeur2 = prompt(" Ou vis tu? ");
    
    }
}
console.log(maFonction());
})();


