//part-1
/*
  Calculate the horizontal position and depth you would have after following the planned course.
  1-What do you get if you multiply your final horizontal position by your final depth?
*/

const fs = require('fs');
const buffer = fs.readFileSync('./input.txt');
const arr = buffer.toString().split('\r\n');

let horizontalPosition = 0, down = 0, up = 0;

const answer1 = () => {
  arr.forEach(item => {
    let n = item.split(' ');
    item.includes('forward')
    ? horizontalPosition += parseInt(n[1])
    : (
      item.includes('down')
      ? down += parseInt(n[1])
      : (
        item.includes('up')
        ? up += parseInt(n[1])
        : console.log('')
      )
    )
  })
  console.log(horizontalPosition * (down - up));
}
answer1()


//part-2
/*
  calculate the horizontal position and depth you would have after following the planned course.
  2-What do you get if you multiply your final horizontal position by your final depth?
*/

let aim = 0, depth = 0;
horizontalPosition = 0, down = 0, up = 0;

const answer2 = () => {
  arr.forEach(item => {
    let n = item.split(' ');
    if (item.includes('forward')) {
      horizontalPosition += parseInt(n[1])
      if (aim !== 0) {
        depth += aim * parseInt(n[1])
      }
    } else if (item.includes('down')) {
      aim += parseInt(n[1])
    } else if (item.includes('up')) {
      aim -= parseInt(n[1])
    }
  })
  console.log(horizontalPosition * depth);
}
answer2()
