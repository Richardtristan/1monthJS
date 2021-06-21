
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {


    function MessageParDate(){
        var date = new Date();
        var day = date.getDay();
         var minutes=date.getMinutes();
         var heure=date.getHours();
         var month =date.getMonth();
         var day1 = date.getDate();
         var year = date.getFullYear();

         switch (new Date().getDay()) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
               day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }
          switch (new Date().getMonth()) {
            case 0:
                month = "January";
              break;
            case 1:
                month = "February";
              break;
            case 2:
                month = "March";
              break;
            case 3:
                month = "April";
              break;
            case 4:
                month = "May";
              break;
            case 5:
                month = "June";
              break;
            case 6:
                month = "July";
              case 7:
                month = "August";
              case 8:
                month = "September";
              case 9:
                month = "October";
                case 10:
                month = "November";
                case 11:
                month = "December";
          }
          if (minutes < 10 ){
            var temp = day + " " + day1 + " " +  month  +" "+ year + ", " + heure +"h"+ "0"+minutes; 
          }

          if (minutes > 10 ){
            var temp = day + " " + day1 + " " +  month  +" "+ year + ", " + heure +"h"+ minutes; 
          }
    
    return temp;


}
document.getElementById("target").innerHTML = MessageParDate()


})();
