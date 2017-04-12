function arrayToList(array) {
    var i = 0;
    var list = {
        value: array[i],
        rest: createNode(i + 1)
    };

    function createNode(i) {
        var node = {};
        node.value = array[i];
        if (i == array.length - 1){
            node.rest = null;
        } else {
            node.rest = createNode(i + 1);
        }
        return node;
    }

    return list;
}

function listToArray(list) {
    var output = [];
    var node = list;
    while (node.rest != null) {
        output.push(node.value);
        node = node.rest;
    }
    output.push(node.value);
    return output;
}

function prepend(element, list) {
    var node = {
        value: element,
        rest: list
    };
    return node;
}

function nth(list, n) {
    if (!list)
        return undefined;
    else if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}