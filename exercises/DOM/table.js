function buildTable(parent, data) {
    var table = document.createElement("table");
    var keys = Object.keys(data[0]);
    var header = document.createElement("tr");
    keys.forEach(function (key) {
        var th = document.createElement("th");
        th.innerHTML = key;
        header.appendChild(th);
    });
    table.appendChild(header);

    data.forEach(function (row) {
        var tr = document.createElement("tr");
        keys.forEach(function (key) {
            var td = document.createElement("td");
            td.innerHTML = row[key];
            if (typeof row[key] == "number")
                td.style.textAlign = "right";
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });

    parent.appendChild(table);
}