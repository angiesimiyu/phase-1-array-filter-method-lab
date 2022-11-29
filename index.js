// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array, name){
    return array.filter(function (driver){
        return driver.toLowerCase() === name.toLowerCase()
    })
};
findMatching(drivers, 'Bobby')

function fuzzyMatch(array, name){
    return array.filter(function (driver){
        return driver.toLowerCase().substring(0, name.length) === name.toLowerCase()
    })
};
fuzzyMatch(drivers, 'Bobby')

function matchName(drivers, argument) {
    return drivers.filter(function (driver) {
        return driver.name === argument
    })
};