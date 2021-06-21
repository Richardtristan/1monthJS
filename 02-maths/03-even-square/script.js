
// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

function square(){
var n=21;
var msg="";
var res= "0";
 
for(var x= 1; x<=n;x++)
{
res = x * x;
msg = msg + " " + x + " * "+ x + " = " + res + "\n";
}
 
alert(msg);
} 
square();
    });

})();
