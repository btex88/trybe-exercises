// Global array to iterate over
const players = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

const numbers = [12, 3, 5, 7, 123, 55, 90, 0, 13];

const students = [
  {studentName: 'Alexandre', exam: 7, project: 5.5, groupProject: 8},
  {studentName: 'Marcondes', exam: 6, project: 7.5, groupProject: 5},
  {studentName: 'Rodrigo', exam: 8.5, project: 9, groupProject: 7},
  {studentName: 'Marcella', exam: 8, project: 7, groupProject: 4},
  {studentName: 'Adriana', exam: 9, project: 7, groupProject: 7},
  {studentName: 'Marlene', exam: 6.5, project: 8, groupProject: 5},
];

/* Disclaimer
  Throughout this code will be seen the usage of Immediately Invoked Function Expression (IIFE) in those loop statements,. that implementation is to secure the lexical scope of the loop
  Source: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/

/*****************************************************************
********************* forEach - Example 01 ***********************
*****************************************************************/

// Using a classic for statement
(() => {for (let index = 0; index < players.length; index += 1) {
  //console.log(`${index} : ${players[index]}`);
}})(); 

// Using for...of statement with destructuring syntax (implemented by ES2015) and calling the method entries() for the object (and array). 
// Source: https://flaviocopes.com/how-to-get-index-in-for-of-loop/
(() => {for (const [index, player] of players.entries()) {
  //console.log(`${index} : ${player}`);
}})(); 

// Using forEach(). forEach method woks only for array and receives a callback function that accept three arguments: forEach(callbackfn: (value, index, array))
(() => players.forEach((a, b, c) => {
  //console.log(`Index → ${a} | Value → ${b} | Array → ${c}`);
}))();

/****************************
***** forEach arguments *****
****************************/
// It accepts any name that is given, but its default is index, value and array
// First argument → The value parameter on forEach method returns the position of the element in the array.
// Second argument → The index parameter on forEach method returns the info of the element stored into a key in the array.
// Third argument → The array parameter on forEach method the whole content of the array is returned.

/*****************************************************************
********************* forEach - Example 02 ***********************
*****************************************************************/

// Using for...of
(() => {for (const [index, num] of numbers.entries()) {
  //console.log(`${index} : ${num} result → ${num*3}`);
}})();

// Using forEach
(() => numbers.forEach((num, index) => {
  //console.log(`${index} :: ${num} | result → ${num * 5}`);
}))();

/*****************************************************************
********************* forEach - Example 03 ***********************
*****************************************************************/

(() => students.forEach(value => {
  const result = (value.exam + value.project + value.groupProject) / 3;
  result < 7 ? console.log(`A pessoa estudante ${value.studentName} tirou uma média insuficiente: ${result.toFixed(2)}`) : console.log(`A pessoa estudante ${value.studentName} passou com média ${result.toFixed(2)}`);
}))();
