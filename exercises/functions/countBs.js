function countBs(str) {
    var result = 0;
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == "B")
            result++;
    }
    return result;
}

function countChar(str, char) {
    var result = 0;
    char = char.toString();
    for (var i = 0; i < str.length; i++){
        if (str.charAt(i) == char)
            result++;
    }
    return result;
}