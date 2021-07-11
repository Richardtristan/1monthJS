// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

<<<<<<< HEAD
    // your code here

=======
    var target = document.getElementById("target");
    var table = document.createElement("table");
    
    for (let a = 1; a < 11; a++) {
        var head = document.createElement("th")
        
    
    for (let i = 1; i < 11; i++) {
        var row = document.createElement("tr")
        row.innerHTML = a * i;
      head.appendChild(row);  
    }

    table.appendChild(head);
    
    }
    target.appendChild(table);
>>>>>>> main
})();
