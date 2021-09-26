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

// EXE 04
// Função 01 :
  // Escreva uma função que vai receber uma string como parâmetro. 
  // Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro.
  // Sua função deve retornar essa nova string.

const seekAndReplace = str => str.replace(/x/g, 'A');
const strInput = 'xuxa'
const funcOneReturn = seekAndReplace(strInput);
console.log(funcOneReturn);

// Função 02: 
  // Escreva uma função que vai receber a string retornada da Função 01 como parâmetro. 
  // Essa função deve concatenar as skills do array global à string que foi passada para a Função 02 via parâmetro. Você deve ordenar os skills em ordem alfabética. 
  // Sua função deve retornar essa nova string.

const arrSkills = ['javascritp', 'python', 'react']
const concatArrays = str => {arrSkills.push(str); return arrSkills.sort().join(` `);}
console.log(concatArrays(funcOneReturn));