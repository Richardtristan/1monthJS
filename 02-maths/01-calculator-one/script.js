
// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let element = Number(document.getElementById("op-one").value);
        let element2 = Number(document.getElementById("op-two").value);
        let result = element + element2;
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let element = Number(document.getElementById("op-one").value);
        let element2 = Number(document.getElementById("op-two").value);
        let result1 = element - element2;
        alert(result1);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let element = Number(document.getElementById("op-one").value);
        let element2 = Number(document.getElementById("op-two").value);
        let result2 = element * element2;
        alert(result2);
    });

    document.getElementById("division").addEventListener("click", function() {
        let element = Number(document.getElementById("op-one").value);
        let element2 = Number(document.getElementById("op-two").value);
        let result3 = element - element2;
        alert(result3);
    });
})();
