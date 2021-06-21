
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {
   
    function MessageParDate(){
        var heure = new Date().getHours();
        var minutes = new Date().getMinutes();
        
            if (heure < 18 ){
                return ('Hello ');
            }
            if (heure > 18 ){
                return ('Good evening');
            }
        }
    
    
        document.getElementById("target").innerHTML = MessageParDate()

})();
