// 08-dom/09-match-password-one/script.js - 8.9: password verification (1)


(() => {
<<<<<<< HEAD

    // your code here

=======
    

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
            pass2.style.borderColor = "red";
            pass1.style.borderColor = "red";
        }
    }
>>>>>>> main
})();
