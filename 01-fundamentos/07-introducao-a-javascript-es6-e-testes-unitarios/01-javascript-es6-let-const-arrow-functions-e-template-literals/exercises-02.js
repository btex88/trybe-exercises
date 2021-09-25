// EXE 01
// Crie uma função que receba um número e retorne seu fatorial.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .

const factorial = num => num <= 1 ? 1 : num * factorial(num - 1);

console.log(factorial(5));

// EXE 02
// Crie uma função que receba uma frase e retorne qual a maior palavra.

const strLength = str => {
  const strArr = str.split(' ');
  let longestWord = strArr[0];
  for (let index = 0; index < strArr.length; index += 1) {
    if (longestWord.length < strArr[index].length) {
      longestWord = strArr[index];
    }
  }
  return longestWord;
}

console.log(strLength(`test if the function gets the longest word and return it`));