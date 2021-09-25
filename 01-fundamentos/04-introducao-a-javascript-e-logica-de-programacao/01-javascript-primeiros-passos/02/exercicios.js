const a = 5;
const b = 19;
const c = 9;


// EXE 01
function sum() {
  let result = a + b;
  console.log(result);
}
sum()

function sub() {
  let result = a - b;
  console.log(result);
}
sub()

function mult() {
  let result = a * b;
  console.log(result);
}
mult()

function div() {
  let result = a / b;
  console.log(result.toFixed(2));
}
div()

function mod() {
  let result = b % a;
  console.log(result);
}
mod()

// EXE 02
function grater() {
  if (a > b) {
    console.log(`${a} é maior que ${b}`)
  } else {
    console.log(`${b} é maior que ${a}`)
  }
}
grater()

// EXE 03
function graterOf() {
  if (a > b) {
    if (a > c) {
      console.log(`${a} é o maior que ${b} e maior que ${c}`)
    } else {
      console.log(`${c} é o maior que ${a} e maior que ${b}`)
    } 
  } else {
    if (b > c) {
      console.log(`${b} é o maior que ${a} e maior que ${c}`)
    } else {
      console.log(`${c} é o maior que ${a} e maior que ${b}`)
    }
  }
}
graterOf()

// EXE 04
function isIt() {
  if (a > 0) {
    console.log(`positive`)
  } else if (a < 0) {
    console.log(`negative`)
  } else if (!(a > 0) && !(a < 0)) {
    console.log(`zero`)
  }
}
isIt()

// EXE 05
function triangle() {
  const sideA = 65
  const sideB = 35
  const sideC = 80

  if (sideA > 0) {
    if (sideB > 0) {
      if (sideC > 0) {
        if (sideA + sideB + sideC === 180) {
          let msg = `Triângulo válido, a soma de ${sideA}º + ${sideB}º + ${sideC}º é igual 180º`
          console.log(msg)
          return true;          
        } else {
          let msgError = `A soma de ${sideA}º + ${sideB}º + ${sideC}º não é igual 180º\nPortanto não se trata de um triângulo válido`;
          console.log(msgError)
          return false;
        }        
      } else {
        let msgError = `${sideC} é um ângulo inválido por ser negativo`
        console.log(msgError)
        return false;
      }
    } else {
      let msgError = `${sideB} é um ângulo inválido por ser negativo`
      console.log(msgError)
      return false;
    }
  } else {
    let msgError = `${sideA} é um ângulo inválido por ser negativo`
    console.log(msgError)
    return false;
  }
}
triangle()

// EXE 06


function chess() {
  const chessPiece = `Pawn`;
  let msg;

  let chessPieceMod = chessPiece.toLowerCase();

   switch (chessPieceMod){
    case `king`:
      msg = `The ${chessPiece} moves one square in any direction`;
      console.log(msg);
      break;

    case `queen`:
      msg = `The ${chessPiece} moves diagonally, horizontally, or vertically any number of squares`
      console.log(msg);
    break;

    case `rook`:
      msg = `The ${chessPiece} moves horizontally or vertically any number of squares.`;
      console.log(msg);
    break;

    case `bishop`:
      msg = `The ${chessPiece} moves diagonally any number of squares.`;
      console.log(msg);
    break;

    case `knight`:
      msg = `The ${chessPiece} moves in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.`;
      console.log(msg);
    break;

    case `pawn`:
      msg = `The ${chessPiece} moves vertically forward one square`;
      console.log(msg);
    break;

    default:
      console.log(`The ${chessPiece} ain't a valid chess piece in this program\n`)
    break;
  }
}
chess()

// EXE 07
function gradeMark() {
  const mark = 75;
  let msg;
  while (mark > 0 && mark < 100) {
    if (mark >= 90) {
      msg = `Congrats, the mark ${mark} makes you grade an A`
    }

  }
msg = `The mark number ${mark} is not a valid number to be be used as a Grade Mark`
console.log(msg);
}

/*
  toLowerCase() method was inspired by a StackOverflow thread and also the usage was described at MDN
  https://stackoverflow.com/questions/2140627/how-to-do-case-insensitive-string-comparison
  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 */
