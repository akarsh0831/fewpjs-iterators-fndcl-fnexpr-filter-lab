const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(name, find) {
    return name.filter(possibleMatch => 
    possibleMatch.toLowerCase() === find.toLowerCase())
}

function fuzzyMatch(name, test) {
    return name.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(test.toLowerCase()) === 0)
}

function matchName(name, city) {
    return name.filter(record => record.name === city)
}
    // Code your solution here
