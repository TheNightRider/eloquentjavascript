function flatten() {
    var array = [];
    for (var i = 0; i < arguments.length; i++){
        array.push(arguments[i]);
    }
    return array.reduce(function (a,b) {
        return a.concat(b);
    }, []);
}