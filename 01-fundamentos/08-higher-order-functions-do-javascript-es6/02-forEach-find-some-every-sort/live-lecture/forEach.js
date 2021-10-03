// forEach
// Throughout this code will be seen the usage of Immediately Invoked Function Expression (IIFE) in those loop statements,. that implementation is to secure the lexical scope of the loop
// Source: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// Global array to iterate over
const players = ['Pelé', 'Jairzinho', 'Marta', 'Formiga', 'Hulk', 'Juary', 'Fábio', 'Janderson', 'Sócrates'];

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
  console.log(`Index → ${a} | Value → ${b} | Array → ${c}`);
}))();
/** forEach arguments - (accepts any name that is given, but its default is index, value and array)
***** First argument → The index parameter on forEach method returns the position of the element in the array.
***** Second argument → The value parameter on forEach method returns the info of the element stored into a key in the array.
***** Third argument → The array parameter on forEach method the whole content of the array is returned.
*/


