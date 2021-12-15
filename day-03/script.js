//part-1
/*
  calculate the gamma rate and epsilon rate, then multiply them together.
  1-What is the power consumption of the submarine?
*/
//note:-Be sure to represent your answer in decimal, not binary.

const fs = require('fs');
const buffer = fs.readFileSync('./input.txt');
const arr = buffer.toString().split('\r\n');
let mostCommonBit = [], leastCommonBit = [], countZeros = 0, countOnes = 0;

const binaryToDecimal = (binaryNum) => {
  let decimalNum = 0;
  binaryNum.forEach((num, i) => {
    decimalNum += num * (2 ** i);
  })
  return decimalNum;
}

const answer1 = (arr) => {
  for (let i = 0; i < 12; i++) {
    arr.forEach(num => {
      num[i] == 0
        ? countZeros++
        : countOnes++
    })
    if (countOnes > countZeros) {
      mostCommonBit.push(1);
      leastCommonBit.push(0)
    } else {
      mostCommonBit.push(0);
      leastCommonBit.push(1)
    }
    countOnes = 0;
    countZeros = 0;
  }
  mostCommonBit = mostCommonBit.reverse();
  leastCommonBit = leastCommonBit.reverse();
  console.log(binaryToDecimal(mostCommonBit) * binaryToDecimal(leastCommonBit));
}
answer1(arr)


//part-2
/*
  calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together.
  2-What is the life support rating of the submarine?
*/
//note:-Be sure to represent your answer in decimal, not binary.

countOnes = 0, countZeros = 0;
let newArray = arr, zerosInPosition = [], onesInPosition = [];
const o2Generator = () => {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j][i] == 0) {
        countZeros++;
        zerosInPosition.push(newArray[j]);
      } else if (newArray[j][i] == 1) {
        countOnes++;
        onesInPosition.push(newArray[j]);
      }
    }
    if (newArray.length > 1) {
      if (countOnes > countZeros) {
        newArray = onesInPosition;
      } else if (countOnes < countZeros) {
        newArray = zerosInPosition;
      } else {
        newArray = onesInPosition;
      }
    }
    onesInPosition = [], zerosInPosition = [];
    countZeros = 0, countOnes = 0;
  }
  let str = newArray.toString().split('').reverse();
  return binaryToDecimal(str);
}


countOnes = 0, countZeros = 0, zerosInPosition = [], onesInPosition = [];
let newArr = arr;
const co2Scrubber = () => {
  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j][i] == 0) {
        countZeros++;
        zerosInPosition.push(newArr[j]);
      } else if (newArr[j][i] == 1) {
        countOnes++;
        onesInPosition.push(newArr[j]);
      }
    }
    if (newArr.length > 1) {
      if (countOnes < countZeros) {
        newArr = onesInPosition;
      } else if (countOnes > countZeros) {
        newArr = zerosInPosition;
      } else {
        newArr = zerosInPosition;
      }
    }
    onesInPosition = [], zerosInPosition = [];
    countZeros = 0, countOnes = 0;
  }
  let str = newArr.toString().split('').reverse();
  return binaryToDecimal(str);
}

const answer2 = (num1, num2) => {
  console.log(num1 * num2);
}
answer2(o2Generator(), co2Scrubber())

