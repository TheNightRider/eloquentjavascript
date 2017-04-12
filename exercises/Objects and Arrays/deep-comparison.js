function deepEqual(a, b) {
    if (a === b)
        return true;

    if (typeof a != "object" || typeof b != "object" || a == null || b == null)
        return false;

    var propsInA = 0, propsInB = 0;

    for (var prop in a)
        propsInA++;

    for (var prop in b){
        propsInB++;

        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return propsInA == propsInB;

}