// Code your solution in this file!

function returnFirstTwoDrivers(array){
    const newArray = [];
    newArray.push(array[0]);
    newArray.push(array[1]);
    return newArray;
}

function returnLastTwoDrivers(array){
    const newArray = [];
    const indexOne = array.length - 2;
    newArray.push(array[indexOne]);
    const indexTwo = array.length - 1;
    newArray.push(array[indexTwo]);
    return newArray;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

function fareDoubler(int){
    return int * 2;
}

function fareTripler(int){
    return int * 3
}

function selectDifferentDrivers(arrayOfDrivers, useFunction){
    return useFunction(arrayOfDrivers)
}