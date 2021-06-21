// 08-dom/10-match-password-two/script.js - 8.10: password verification (2)


(() => {

    document.getElementById("run").onclick=function()
    {
    var pass1 = document.getElementById("pass-one");
    var pass2 = document.getElementById("pass-two");
    
        if (pass1.value == pass2.value){
            console.log("Mot de passe identique")
            pass2.style.borderColor = "green";
            pass1.style.borderColor = "green";
        }
        else{
            pass2.classList.add("error");
            pass1.classList.add("error");
  
        }
    }

})();
