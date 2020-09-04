const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2)
}

const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(multiplier){
        return int * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


const selectDifferentDrivers = function (drivers, driverFunction) {
    return driverFunction(drivers);
  };