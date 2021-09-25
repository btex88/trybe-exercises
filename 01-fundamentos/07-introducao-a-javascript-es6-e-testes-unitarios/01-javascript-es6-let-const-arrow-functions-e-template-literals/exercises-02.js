// EXE 01

const factorial = num => 
  num <= 0 
  ? (num === 0 
    ? `O fatorial de ${num} é 1` 
    : `Não existe fatorial de ${num}`) 
  : num * factorial(num - 1);

console.log(factorial(5));