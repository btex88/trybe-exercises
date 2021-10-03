// Global array to iterate over

const people = [
  { firstName: "Robert", surName: "De Niro", canDrive: true },
  { firstName: "Michelle", surName: "Pfeiffer", canDrive: true },
  { firstName: "Will", surName: "Smith", canDrive: false },
  { firstName: "Mariah", surName: "Carey", canDrive: true },
  { firstName: "Lady", surName: "Gaga", canDrive: false },
  { firstName: "Justin", surName: "Bieber", canDrive: true },
];

/* Disclaimer
  Throughout this code will be seen the usage of Immediately Invoked Function Expression (IIFE) in those loop statements,. that implementation is to secure the lexical scope of the loop
  Source: https://developer.mozilla.org/en-US/docs/Glossary/IIFE
*/

/*****************************************************************
 *********************** some - Example 01 ************************
 *****************************************************************/

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

(() => {
  const isTherePeopleThatCantDrive = (people) => people.some((value) => value.canDrive !== true);
  console.log(isTherePeopleThatCantDrive(people));
})();
/****************************
***** some arguments *****
****************************/
// some() method it's a kind of predicate function, that's because it takes the given value (an array), and throughout it's iteration will verify if the condition is satisfied, returning true or false for it's verification
// It accepts any name that is given, but its default is index, value and array
// First argument → The value parameter on forEach method returns the position of the element in the array.
// Second argument → The index parameter on forEach method returns the info of the element stored into a key in the array.
// Third argument → The array parameter on forEach method the whole content of the array is returned.