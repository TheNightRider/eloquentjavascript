

function average(array) {
    return array.reduce(function (a, b) {
        return a + b;
    },0) / array.length;
}

function calculateAgeDif(ancestry) {
    var diferences = [];
    ancestry.forEach(function (child) {
        var mother = ancestry.filter(function (person) {
            if (person.name == child.mother)
                return person;
        })[0];
        if (mother) {
            var difference = child.born - mother.born;
            diferences.push(difference);
        }
    });
    return average(diferences);
}

