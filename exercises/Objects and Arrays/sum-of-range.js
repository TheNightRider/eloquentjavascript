function range(start, end, step) {
    var result = [];
    if (!step)
        var step = 1;

    if (end > start && step > 0) {
        for (var i = start; i <= end; i += step) {
            result.push(i);
        }
    } else if (end < start && step < 0){
        for (var i = start; i >= end; i += step) {
            result.push(i);
        }
    }
    return result;
}

function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++){
        result += array[i];
    }
    return result;
}