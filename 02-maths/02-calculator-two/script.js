
// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let element = Number(document.getElementById("op-one").value);
        let element2 = Number(document.getElementById("op-two").value);
       
        switch (operation) {

        
            case 'addition':
              alert( element + element2)
              break;
              case 'substraction':
                alert( element - element2)
                break;
                case 'multiplication':
                    alert( element * element2)
                    break;
                    case 'division':
                        alert( element / element2)
                        break;
        
          }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
