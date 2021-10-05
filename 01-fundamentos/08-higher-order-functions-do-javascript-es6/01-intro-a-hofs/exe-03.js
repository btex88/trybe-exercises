/* 
Exercício 03
  - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
    - Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const fn = (rightAnswers, studentAnswers, rightWrongVerifyFn) => {
  return rightWrongVerifyFn(rightAnswers, studentAnswers);
};

const rightWrongVerifyFn = (rightAnswers, studentAnswers) => {
  const wrongAnswersArr = [];
  const rightAnswersArr = [];
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      rightAnswersArr.push(rightAnswers[index]);
    } else {
      wrongAnswersArr.push(studentAnswers[index]);
    }
  }
  for (let index = 0; index < wrongAnswersArr.length; index += 1) {
   if (wrongAnswersArr[index] === 'N.A') {
    wrongAnswersArr.splice(index, 1);
   } 
  }
  const total = (rightAnswersArr.length * 1) - (wrongAnswersArr.length * 0.5);
  return total;
};

console.log(fn(RIGHT_ANSWERS, STUDENT_ANSWERS, rightWrongVerifyFn));
