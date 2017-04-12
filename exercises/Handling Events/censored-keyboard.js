function censoredKeyboard(input) {
    input.addEventListener("keypress", function (event) {
        var letter = String.fromCharCode(event.charCode);
        if (!letter.search(/[XQW]/i))
            event.preventDefault();
    });
}