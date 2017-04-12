function isIndexInObject(index, obj) {
    for(var ind in obj){
        if (ind == index)
            return true;
    }
    return false;
}

function averageAgePerCentury(ancestry) {
    var result = {};
    ancestry.forEach(function (person) {
        var century = Math.ceil(person.died / 100).toString();
        var age = person.died - person.born;
        if (isIndexInObject(century, result)){
            result[century].push(age);
        } else {
            result[century] = [age];
        }
    });

    for (var century in result){
        result[century] = average(result[century]);
    }
    return result;
}