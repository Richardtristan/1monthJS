// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    var target = document.getElementById("target");
    var table = document.createElement("table");
    var head = document.createElement("th")
    for (let i = 0; i < 10; i++) {
        var row = document.createElement("tr")
      head.appendChild(row);  
    }
    table.appendChild(head);
    target.appendChild(table);
})();
