
// 04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13


(() => {

    document.getElementById("run").addEventListener("click", function() {
        
            var a = document.getElementById("year").value;
            var arr = [];
            
            for (i = 0; i < 12; i++) {
                var d = new Date(a, i, 13 );                          
                if (d.getDay() == 5) {
                    switch (i) {
            case 0:
            var month = "January";
                arr.push(month);
              break;
            case 1:
                var month = "February";
                arr.push(month);
              break;
            case 2:
            var month = "March";
                arr.push(month);
              break;
            case 3:
            var month = "April";
                arr.push(month);
              break;
            case 4:
            var month = "May";
                arr.push(month);
              break;
            case 5:
            var month = "June";
                arr.push(month);
              break;
            case 6:
            var month = "July";
                arr.push(month);
                break;
              case 7:
            var month = "August";
                arr.push(month);
                break;
              case 8:
            var month = "September";
                arr.push(month);
                break;
              case 9:
            var month = "October";
                arr.push(month);
                break;
                case 10:
            var month = "November";
                arr.push(month);
                break;
                case 11:
            var month = "December";
                arr.push(month);
                break;
        }
    }

}
console.log(arr);
alert("les mois des vendredi 13 sont : " + arr);
        
});


})();
