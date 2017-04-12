function reverseArray(array) {
    var output = [];
    for (var i = array.length - 1; i >= 0; i--){
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    var upTo = array.length;
    for (var i = 0; i < upTo; i++){
        var old = array[i];
        var x = array.length - i - 1;
        array[i] = array[x];
        array[x] = old;
        upTo--;
    }
}