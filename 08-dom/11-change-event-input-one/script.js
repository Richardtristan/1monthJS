// 08-dom/11-change-event-input-one/script.js - 8.11: change event (1)


(() => {

    document.getElementById("pass-one").maxLength = 10;

    document.getElementById("pass-one").onkeyup=function()
        {
    var count = document.getElementById("pass-one").value.length;
    document.getElementById("counter").innerHTML = count + "/10";
        }
})();
