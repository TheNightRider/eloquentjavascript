function asTabs(node) {
    var tabNames = [], data = [];
    //console.log(node.childNodes);
    for (var i = 0; i < node.childNodes.length; i++){
        var child = node.childNodes[i];
        if (child.nodeType == document.ELEMENT_NODE){
            var name = child.getAttribute("data-tabname");
            tabNames.push(name);
            data.push(child.innerHTML);
        }
    }
    node.innerHTML = "";
    var div = document.createElement("div");
    div.innerHTML = data[0];

    for (var i = 0; i < tabNames.length; i++){
        var button = document.createElement("button");
        button.innerHTML = tabNames[i];
        node.appendChild(button);
    }

    node.appendChild(div);
    var buttons = document.querySelectorAll("button");
    buttons.forEach(function (button, i) {
        button.addEventListener("click", function (event) {
            buttons.forEach(function (otherButton) {
                otherButton.style.background = "";
            });
            event.target.style.background = "red";
            var index = tabNames.indexOf(event.target.textContent);
            div.textContent = data[index];

        });
    });
}