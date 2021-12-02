/*
  measurements:
  199 (first measurement)
  200 (increased)
  208 (increased)
  210 (increased)
  200 (decreased)*
  207 (increased)
  240 (increased)
  269 (increased)
  260 (decreased)*
  263 (increased)
*/

//part-1
/*
  1-count the number of times a depth measurement increases from the previous measurement.
  There is no measurement before the first measurement.

  2-How many measurements are larger than the previous measurement?
 */

//note that there are 7 measurements that are larger than the previous measurement.(7 times increased)

const fs = require('fs');
const buffer = fs.readFileSync('./input.txt');
const numbers = buffer.toString().split('\n').map(n => parseInt(n));

const answer1 = () => {
  const arrayOfMeasurements = numbers;
  let count = 0, temp = arrayOfMeasurements[0];
  arrayOfMeasurements.forEach((item, i) => {
    if (item > temp) {
      count++;
      temp = arrayOfMeasurements[i];
    } else {
      temp = arrayOfMeasurements[i];
    }
  })
  return count;
}

console.log(answer1());

//part-2

/*
  1-count the number of times the sum of measurements in this sliding window increases from the previous sum.
  So, compare A with B, then compare B with C, then C with D, and so on.
  Stop when there aren't enough measurements left to create a new three-measurement sum.
*/

const answer2 = () => {
  const arrayOfMeasurements = numbers;
  let count = 0, temp = arrayOfMeasurements[0] + arrayOfMeasurements[1] + arrayOfMeasurements[2];
  arrayOfMeasurements.forEach((item, i) => {
    const arr = arrayOfMeasurements;
    if (arr[i]+arr[i+1]+arr[i+2] > temp) {
      count++;
      temp = arr[i] + arr[i + 1] + arr[i + 2];
    } else {
      temp = arr[i] + arr[i + 1] + arr[i + 2];
    }
  })
  return count;
}

console.log(answer2());
