// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    let elements = document.querySelectorAll(".target")

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.innerHTML = "owned";
    }

})();
