
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        const number = Number(document.getElementById("number").value);

// checking if number is negative
if (number < 0) {
    alert('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    alert(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    alert(`The factorial of ${number} is ${fact}.`);
}

    }
);

})();
