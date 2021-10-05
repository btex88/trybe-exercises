/* 
Exercício 02
  - Desenvolva uma HOF que retorna o resultado de um sorteio. 

  - Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o númenro apostado e uma função que checa se o número apostado é igual ao número sorteado. 

  - O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const verifyWin = (num, callback) => { 
  return num === callback ? `You won!` : `Try again!`;
}

const lotoResult = (max, min) => { 
  return Math.round(Math.random() * (max - min) + min);
}

console.log(verifyWin(5, lotoResult(5, 1)));
