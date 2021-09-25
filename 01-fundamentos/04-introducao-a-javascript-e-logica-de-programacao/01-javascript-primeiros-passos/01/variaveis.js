// EXERCÍCIOS Parte 01 

// Variáveis 

const myName = `Brunão`
const birthCity = `Belo Horizonte`
const birthYear = `1988`
console.log(`My name is → ${myName}\nI was born in → ${birthCity}\nAt the year of → ${birthYear}\n`)

// This part of the code generates an error 'couse a const can't be reatributed.
/*
const birthCity = `New York`
console.log(`My name is → ${myName}\nI was born in → ${birthCity}\nAt the year of → ${birthYear}\n`)
*/


// Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

const base = 5
let height = 8
const area = base * height

console.log(area)

const perimeter = (base * 2) + (height * 2)

console.log(perimeter, `\n`);


// Condições If e Else

const mark = 69

if (mark >= 80) {
  console.log(`Parabéns, você foi aprovada(o)!\n`)
} else if (mark < 80 || mark >= 60) {
  console.log(`Você está na nossa lista de espera\n`)
} else {
  console.log(`Você foi reprovada(o)\n`)
}

// Operadores Lógicos
// AND - &&

const currentHour = 20;
let message = ``;

if (currentHour >= 22) {
  message = `Não deveríamos comer nada, é hora de dormir`;
} else if (22 > currentHour && currentHour >= 18) {
  message = `Rango da noite, vamos jantar :D`;
} else if (18 > currentHour && currentHour >= 14) {
  message = `Vamos fazer um bolo pro café da tarde?`;
} else if (14 > currentHour && currentHour > 11) {
  message = `Hora do almoço!!!`;
} else if (11 > currentHour && currentHour > 4) {
  message = `Hmmm, cheiro de café recém passado`;
}

console.log(message, `\n`);

// OR - ||

let weekday = `quarta-feira`;

if ((weekday = `segunda-feira`) || (weekday = `terça-feira`) || (weekday = `quarta-feira`) || (weekday = `quinta-feira`) || (weekday = `sexta-feira`)) {
  console.log(`Oba, mais um dia de aprendizado na Trybe >:D\n`);
} else if ((weekday = `sábado`) || (weekday = `domingo`)) {
  console.log(`FINALMENTE, descando merecido UwU\n`);
}

//  NOT - !

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

const squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.

console.log(!null); // true

console.log(!undefined); // true

// Switch Case

let status;

switch (status) {
  case `aprovada`:
    console.log(`aprovada`);
    break;
  case `lista`:
    console.log(`lista`);
   break;
  case `reprovada`:
    console.log(`reprovada`);
    break;
  default:
    console.log(`não se aplica`);
}

