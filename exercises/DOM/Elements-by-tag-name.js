function byTagName(node, tagName) {
    var output = [];
    tagName = tagName.toUpperCase();
    function explore(node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            var name = child.tagName;
            if (name == tagName)
                output.push(child);
            explore(child);
        }
    }
    explore(node);
    return output;
}