// ARAAY
// EXE 01

function getValue() {
  let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  let menuServices = menu[menu.length - 3]
  
  console.log(menuServices);
}
getValue()

// EXE 02
function searchValue() {
  let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu.indexOf(`Portfolio`);

console.log(indexOfPortfolio);
}
searchValue()

// EXE 03
function addValue() {
  let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
  menu.push(`Contato`)
  // Para colocar no início use:
  // menu.unshift(`Contato`) 

  console.log(menu);
}
addValue()

// FOR
// EXE 01
function printElements() {
  let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
  for (let index = 0; index < groceryList.length; index++) {
    const element = groceryList[index];
    console.log(element)
  }  
}
printElements()

// FOR...OF
// EXE 01
function printForOf() {
  let names = ['João', 'Maria', 'Antônio', 'Margarida'];
  for (const iterator of names) {
    console.log(iterator)
  }
}
printForOf()
