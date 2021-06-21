
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {


   
// 04-dates/01-title-by-hour-one/script.js - 4.1: text according to the hour (1)


(() => {
   

    function MessageParDate(){
        var date = new Date();
         var minutes=date.getMinutes();
         var heure=date.getHours();

    var temp = heure+"."+minutes; 
    var heure_minutes = parseFloat(temp); 
    
    if(heure_minutes<17.3){return "Hello";}
     else {return "Good evening";}


}
document.getElementById("target").innerHTML = MessageParDate()

})();


})();
