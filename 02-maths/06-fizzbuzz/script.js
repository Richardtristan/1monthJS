
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {

 for (let i = 0; i < 100; i++) {
    if (i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz")
             }

    else if ((i % 3) == 0){
console.log("fizz")
     }

    else if ((i % 5) == 0){
        console.log("buzz")
             }  
             else{
                console.log(i);
               }
 }

})();
