
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {



            document.getElementById("run").onclick=function() {
        var date = new Date();

        var year = date.getFullYear();

        var month = date.getMonth();

        var date1 = date.getDate();

        var jour = document.getElementById("dob-day").value;
        var mois = document.getElementById("dob-month").value;
        var annee = document.getElementById("dob-year").value;

        var age = year - annee;

       if  ( month <= mois){
           if (date1 >= jour && month <= mois){
            alert("ton age est de "  + age ); 
           }
           
       }
       else {
        alert("ton age est de "  + (age - 1));
       }
}
})();
