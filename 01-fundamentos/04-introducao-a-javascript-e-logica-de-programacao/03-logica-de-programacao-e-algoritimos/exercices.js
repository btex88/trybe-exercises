// Global variables, array and declaration
let n = 18;
const sqrArr = [];
const triangleLeftArr = [];
const triangleRightArr = [];
const triangleIsoArr = [];
let stringArr;

// EXE 01
function asteriskSquare(n) {
  for (let i = 0; i < n; i += 1) {
    sqrArr.push(`*`);
  }
  for (let j = 0; j < n; j += 1) {
    stringArr = sqrArr.join(``);
    console.log(stringArr);
  }
}
asteriskSquare(n)

// EXE 02
function asteriskTriangleLeft(n) {
  for (let k = 0; k < n; k += 1) {
    triangleLeftArr.push(`*`);
    stringArr = triangleLeftArr.join(``);
    console.log(stringArr);
  }
}
asteriskTriangleLeft(n)

// EXE 03
function asteriskTriangleRight(n) {
  for (let l = 0; l < n; l += 1) {
    triangleRightArr.push(` `);
  }
  for (let m = n; m > 0; m -= 1) {
    triangleRightArr.fill(`*`, m - 1, triangleRightArr.length);
    stringArr = triangleRightArr.join(``);
    console.log(stringArr);
  }
}
asteriskTriangleRight(n)

// EXE 04
function asteriskTriangleIso(n) {
  let countRight = Math.floor((n % 2) - 1);
  let countLeft = Math.floor((n % 2));
  if (n % 2 === 0) {
    for (let o = 0; o <= n; o += 1) {
      triangleIsoArr.push(` `);
    }

    let arrMiddle = Math.floor(triangleIsoArr.length / 2);

    for (let p = n / 2; p >= 0; p -= 1) {
      triangleIsoArr.fill(`*`, arrMiddle + countLeft, arrMiddle + countRight);
      countRight += 1;
      countLeft -= 1;

      stringArr = triangleIsoArr.join(``);
      console.log(stringArr);
    }
  } else {
    n += 1;
    return asteriskTriangleIso(n);
  }
}
asteriskTriangleIso(n);

/*
New Methods Used:
- join() is an array method that concatenate into a string all the elements of an array
- fill(value, start index, end index) is an array method that changes elements inside the array to a specific given value.

SOURCES
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
*/