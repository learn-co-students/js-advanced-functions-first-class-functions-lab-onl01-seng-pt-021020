const returnFirstTwoDrivers = function(array) {
    let newArray = [];
    newArray.push(array[0])
    newArray.push(array[1])
    return newArray;
}

const returnLastTwoDrivers = function(array) {
    let newArray = [];
    newArray.push(array.pop());
    newArray.unshift(array.pop());
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    let endAmount;
    return function(fare) {
        return endAmount = fare * integer;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function(drivers, fn) {
    return fn(drivers);
}