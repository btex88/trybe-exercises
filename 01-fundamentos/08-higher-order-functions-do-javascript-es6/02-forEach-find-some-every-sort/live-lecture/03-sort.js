// Global array to iterate over
const players = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

const numbers = [12, 3, 5, 7, 123, 55, 90, 0, 13];

/* Disclaimer
  Throughout this code will be seen the usage of Immediately Invoked Function Expression (IIFE) in those loop statements,. that implementation is to secure the lexical scope of the loop
  Source: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/

//=================================================================
//=================================================================
/******************************************************************
*********************** sort() example 01 *************************
******************************************************************/

// Using sort on array of strings
(() => {
  players.sort();
  return console.log(players);
})();

// Using sort on array of numbers 
// without comparefn
(() => {
  numbers.sort();
  return console.log(numbers);
})();

// with comparefn (compare function)
(() => {
  numbers.sort((x, y) => x - y);
  return console.log(numbers);
})()

/****************************
****** sort arguments *******
*****************************
  - The return will be the sorted array. This method modifies the original array.
  - The sort() method, it will sort the array, a transforming all elements into strings, than sort it out.
  - To sort numbers in an orderly way, is needed to use a compare function
  - The compare function receives two arguments and compare each other.
  - Remember, to sort, in an increasing order, numbers that may have 2 digits or more in a  the sort should be used like that: 
    - someArr.sort((x, y) => x - y)
  - To do it in a decreasing order, just invert the arguments of expression:
    - someArr.sort((x, y) => y - x)
*/