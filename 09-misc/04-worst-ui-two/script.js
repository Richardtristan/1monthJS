// 09-misc/04-worst-ui-two/script.js - 9.4: worst user interface (2) : phone clicker


(() => {

var output = document.getElementById("part-one");


oninput = function() {
  output.innerHTML = "0" + this.value;
}

})();
