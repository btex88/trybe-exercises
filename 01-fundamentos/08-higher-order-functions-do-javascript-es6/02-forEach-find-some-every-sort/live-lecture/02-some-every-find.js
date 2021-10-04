// Global array to iterate over

const people = [
  { firstName: "Robert", surName: "De Niro", canDrive: true },
  { firstName: "Michelle", surName: "Pfeiffer", canDrive: true },
  { firstName: "Will", surName: "Smith", canDrive: true },
  { firstName: "Mariah", surName: "Carey", canDrive: true },
  { firstName: "Lady", surName: "Gaga", canDrive: true },
  { firstName: "Justin", surName: "Bieber", canDrive: true },
];

/*=========================================================================================================
============================================= Disclaimer ==================================================
- Throughout this code will be seen the usage of Immediately Invoked Function Expression (IIFE). 
- That implementation is to secure the lexical scope of the loop.
  - Source: https://developer.mozilla.org/en-US/docs/Glossary/IIFE 
===========================================================================================================
==========================================================================================================*/

//=================================================================
//=================================================================
/******************************************************************
***************************** some() ******************************
******************************************************************/

// Using for...of
(() => {
  const isTherePeopleThatCantDrive = (people) => {
    for (person of people) {
      if (person.canDrive !== true) {
        return true;
        break;
      }
    }
    return false;
  };
  //console.log(isTherePeopleThatCantDrive(people));
})();


// Using some()
(() => {
  const isTherePeopleThatCantDrive = (people) => people.some((value) => value.canDrive !== true);
  //console.log(isTherePeopleThatCantDrive(people));
})();

/****************************
****** some arguments *******
*****************************
  - The return will be a boolean value.
  - If one element of my array satisfy the statement condition, it will return true.
  - The some() method it's a kind of predicate function, that's because it takes the given value (an array), and throughout it's iteration will verify if the condition is satisfied, returning true or false for it's verification.
  - It accepts any name that is given, but its default is index, value and array.
  - First argument → The value parameter on forEach method returns the position of the element in the array.
  - Second argument → The index parameter on forEach method returns the info of the element stored into a key in the array.
  - Third argument → The array parameter on forEach method the whole content of the array is returned.
*/

//=================================================================
//=================================================================
/******************************************************************
***************************** every () ****************************
******************************************************************/

// Using for...of
(() => {
  const doesEveryBodyDrives = (people) => {
    for (arg of people) {
      if (arg.canDrive !== true) {
        return false;
      }
    }
    return true;
  };
  //console.log(doesEveryBodyDrives(people));
})();

// using every()
(() => {
  const doesEveryBodyDrives = people => people.every(arg => arg.canDrive !== true);
  //console.log(doesEveryBodyDrives(people));
})();

/****************************
****** every arguments ******
*****************************
  - The return will be a boolean value.
  - If every element of my array satisfy the statement condition, it will return true.
  - The every() method, it will verify if all the elements of the array satisfy the condition, so it will run throughout the array, not just until it breaks
  - It is also a kind of predicate function and has the same arguments as the some method.
    - It accepts any name that is given, but its default is index, value and array
  - First argument → The value parameter on forEach method returns the position of the element in the array.
  - Second argument → The index parameter on forEach method returns the info of the element stored into a key in the array.
  - Third argument → The array parameter on forEach method the whole content of the array is returned.
*/

//=================================================================
//=================================================================
/******************************************************************
***************************** find() ******************************
******************************************************************/

// Using classic for
(() => {
  const personThatCantDrive = (people) => {
    for (let index = 0; index < people.length; index += 1) {
      if (people[index].canDrive === true) {
        return people[index];
        break;
      }
    };
    return undefined
  };
  console.log(personThatCantDrive(people));
})();

// Using find()
(() => {
  const personThatCantDrive = people => people.find((people) => people.canDrive === true);
  console.log(personThatCantDrive(people));
})();

/****************************
****** find arguments *******
*****************************
  - The return will be the first element that matches the condition passed.
  - The first element of my array satisfy the statement condition, will be returned.
  - The find() method, it will verify if the array, and the first element that satisfies the condition statement will be returned.
  - It is also a kind of predicate function but different from some() and every() method the return will be the element of the array.
    - It accepts any name that is given, but its default is index, value and array
  - First argument → The value parameter on forEach method returns the position of the element in the array.
  - Second argument → The index parameter on forEach method returns the info of the element stored into a key in the array.
  - Third argument → The array parameter on forEach method the whole content of the array is returned.
*/
