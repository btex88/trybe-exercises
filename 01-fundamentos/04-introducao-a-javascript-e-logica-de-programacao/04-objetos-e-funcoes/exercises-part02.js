// Parte 02

// EXE Objetos e For/In

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// 01
console.log(`Bem-vinda ${info.personagem}`);

// 02
info.recorrente = 'Sim';
console.log(info);

// 03
for (let index in info) {
  console.log(index)
}

// 04
for (let index in info) {
  console.log(info[index]);
}

// 05
let info02 = {
  personagem: `Tio Patinhas`,
  origem: `Christmas on Bear Mountain, Dell's Four Color Comics #178`,
  nota: `O último MacPatinhas`,
  recorrente: `Sim`
};

if (info.recorrente === info02.recorrente) {
  let status = `Ambos recorrentes`;
  console.log(`${info.personagem} e ${info02.personagem}\n${info.origem} e ${info02.origem}\n${info.nota} e ${info02.nota}\n${status}`)
}

// EXE Funções

// 01

function stringRecieved(string) {
  let strArr = string.split(``);
  let strArrReverse = strArr.reverse();
  let strJoin = strArrReverse.join(``);
  if (strJoin !== string) {
    return console.log(false);
  } else {
    return console.log(true);
  }
}
stringRecieved(`casa`);

function greatestNum(value) {
  let greater = value[0];
    for (let count = 0; value.length > count; count+= 1) {
     if (greater < value[count]) {
       greater = value[count];
     }
      console.log(count, greater)
  }
}
let test = [200, 70, 6, 7, 10, 0, -3, 76, -4, 98, 785];
greatestNum(test)


