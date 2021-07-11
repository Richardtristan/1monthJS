// 09-misc/06-guess-number/script.js - 9.6: guess the number

(() => {

    function entierAleatoire(min, max)
    {
     return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //Utilisation
    //La variable contient un nombre aléatoire compris entre 1 et 100
    var entier = entierAleatoire(1, 100);
    
    var maxtry = 10;
    var rep = "";
    var message = 'Donne un nombre entre ' + 1 + ' et ' + "100, " + " " + "tu as 10 essaies" +':';
    var guess = "";
    guess = prompt(message, rep);
    while (entier != guess) {
        // Prompt the user for a guess.
        console.log(guess);
        console.log(entier);  
        // If the cancel button was pushed, let the user know the game is ending and
        // break out of the loop.
        if (guess == null) {
            alert('Quitting game now.');
            break;
        }
    
    }
})();
