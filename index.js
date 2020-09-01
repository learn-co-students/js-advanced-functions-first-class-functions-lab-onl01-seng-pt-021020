// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  let newDrivers = [];
  newDrivers.push(drivers[0], drivers[1]);
  return newDrivers;
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (multiply) {
  return function (value) {
    return multiply * value;
  };
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, selectDriver) {
  return selectDriver(drivers);
};
