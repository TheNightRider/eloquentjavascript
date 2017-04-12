function mouseTrail() {
    var elements = [];
    for (var i = 0; i < 20; i++){
        var element = document.createElement("div");
        element.style.position = "absolute";
        element.style.height = "5px";
        element.style.width = "5px";
        element.style.backgroundColor = "blue";
        document.body.appendChild(element);
        elements.push(element);
    }
    var counter = 0;
    addEventListener("mousemove", function (event) {
        elements[counter].style.top = (event.pageY - 5) + "px";
        elements[counter].style.left = (event.pageX - 5) + "px";
        counter = (counter + 1) % elements.length;
    });
}