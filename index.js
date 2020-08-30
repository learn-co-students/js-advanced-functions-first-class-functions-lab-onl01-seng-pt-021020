// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    const firstTwo = [];
    firstTwo.push(drivers[0], drivers[1]);
    return firstTwo;
}

const returnLastTwoDrivers = (drivers) => {
    const lastTwo = [];
    lastTwo.push(drivers[drivers.length -2], drivers[drivers.length -1]);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return function fareMultiplier(fare) {
        return fare * num;
    }
}

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (drivers, diffFunc) => {
    return diffFunc(drivers)
}