// 08-dom/12-change-event-input-two/script.js - 8.12: change event (2)


(() => {

    (() => {

        // your code here
        var p = document.getElementById("validity");
        var m = document.getElementById("pass-one");
        m.addEventListener("input", function () {
            var n = document.getElementById("pass-one").value;
            var o = n.length;
            var s = n.replace(/\D/g, '').length;
            if ((o >= 8) && (s >= 2)) {
                p.innerHTML = "Ok";
            }
            else {
                p.innerHTML = "Not ok";
            }
        });
    
    })();

})();
