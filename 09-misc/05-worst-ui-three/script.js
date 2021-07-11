// // 09-misc/05-worst-ui-three/script.js - 9.5: worst user interface (3) : phone slot


(() => {




    var first = setInterval(() => {


    var one = document.getElementById("part-one").value = Number(document.getElementById("part-one").value) + 1;
        document.getElementById("target").innerHTML = "0" + one + "000000";
        // console.log(one);
        if (document.getElementById("part-one").value > 498) {
            document.getElementById("part-one").value = 460;
            document.getElementById("target").innerHTML = "0460000000";
            
        }

    }, 1000);


    var second = setInterval(() => {

        var target = Number(document.getElementById("target").innerText)

        var two = document.getElementById("part-two").value = Number(document.getElementById("part-two").value) + 1;

        

        if (two < 10) {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-two").value + "0000"))
            document.getElementById("part-two").value = "0" + two;
        }
        else {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-two").value + "0000"))

        }

        if (document.getElementById("part-two").value > 98) {
            document.getElementById("part-two").value = "00";
        }
    }, 1000);

    var troisieme = setInterval(() => {

        var target = Number(document.getElementById("target").innerText)

        var three = document.getElementById("part-three").value = Number(document.getElementById("part-three").value) + 1;

        

        if (three < 10) {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-three").value + "00"))
            document.getElementById("part-three").value = "0" + three;
        }
        else {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-three").value +   "00"))

        }
        console.log(three);
        if (document.getElementById("part-three").value > 98) {
            document.getElementById("part-three").value = "00";
        }
    }, 1000);


    var quatre = setInterval(() => {

        var target = Number(document.getElementById("target").innerText)

        var four = document.getElementById("part-four").value = Number(document.getElementById("part-four").value) + 1;

        

        if (four < 10) {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-four").value))
            document.getElementById("part-four").value = "0" + four;
        }
        else {
            document.getElementById("target").innerHTML = "0" + Number(target + Number(document.getElementById("part-four").value))

        }
        console.log(four);
        if (document.getElementById("part-four").value > 98) {
            document.getElementById("part-four").value = "00";
        }
    }, 1000);

    document.getElementById("fix-part-one").addEventListener("click", () => {
    
        clearInterval(first);     
        document.getElementById("target").value = first.one;
        clearInterval(second);     
        document.getElementById("target").value = first.two;
        clearInterval(troisieme);     
        document.getElementById("target").value = first.three;
        clearInterval(quatre);     
        document.getElementById("target").value = first.four;
    })
    document.getElementById("fix-part-two").addEventListener("click", () => {
    
        clearInterval(first);     
        document.getElementById("target").value = first.one;
        clearInterval(second);     
        document.getElementById("target").value = first.two;
        clearInterval(troisieme);     
        document.getElementById("target").value = first.three;
        clearInterval(quatre);     
        document.getElementById("target").value = first.four;
    })
    document.getElementById("fix-part-three").addEventListener("click", () => {
    
        clearInterval(first);     
        document.getElementById("target").value = first.one;
        clearInterval(second);     
        document.getElementById("target").value = first.two;
        clearInterval(troisieme);     
        document.getElementById("target").value = first.three;
        clearInterval(quatre);     
        document.getElementById("target").value = first.four;
    })
    document.getElementById("fix-part-four").addEventListener("click", () => {
    
        clearInterval(first);     
        document.getElementById("target").value = first.one;
        clearInterval(second);     
        document.getElementById("target").value = first.two;
        clearInterval(troisieme);     
        document.getElementById("target").value = first.three;
        clearInterval(quatre);     
        document.getElementById("target").value = first.four;
    })
    
    
})();