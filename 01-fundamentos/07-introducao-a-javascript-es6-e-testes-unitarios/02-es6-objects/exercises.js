//============================================================================
//================================= PART 01 ==================================
//============================================================================
/*
01 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  - Note que o parâmetro da função já está sendo passado na chamada da função.

02 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  - Modifique o nome da pessoa compradora.
  - Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  return console.log(`Olá ${order.order.delivery.deliveryPerson}, 
  entrega para: ${order.name}, 
  Telefone: ${order.phoneNumber}, 
  ${order.address.street}, 
  Nº: ${order.address.number}, 
  AP: ${order.address.apartment}
  `);
};

// customerInfo(order);

const orderModifier = (order) => {
  const pizzaFlavours = Object.keys(order.order.pizza);
  // Adicione abaixo as informações necessárias.
  order.name2 = "Luiz Silva";
  return console.log(`Olá ${order.name2}, 
  o total do seu pedido de 
  ${pizzaFlavours[0]}, ${pizzaFlavours[1]}, e ${order.order.drinks.coke.type} é 
  R$ ${
    Number(order.order.drinks.coke.price) +
    Number(order.order.pizza.marguerita.price) +
    Number(order.order.pizza.pepperoni.price) -
    5
  },00.
  `);
};

// orderModifier(order);

//============================================================================
//================================= PART 02 ==================================
//============================================================================
/* 
01 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

02 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

03 - Crie uma função para mostrar o tamanho de um objeto.

04 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

05 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons).

06 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

07 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

08 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 
*/
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const changeClassShift = (obj, key, value) =>  obj[key] = value;
//console.log(changeClassShift(lesson2, 'turno', 'noite'));

const listObjKeys = obj => console.log(Object.keys(obj))
// listObjKeys(lesson3);

const objSize = obj => Object.keys(obj).length;
//console.log(objSize(lesson1));

const listObjValues = obj => console.log(Object.values(obj))
//listObjValues(lesson2);

let allLessons;
const groupObjects = (...obj) => allLessons = obj;
groupObjects(lesson1, lesson2, lesson3);
console.table(allLessons);

const studentCount = studentNumber => {
  studentNumber = 0;
  for (let index = 0; index < allLessons.length; index += 1) {
    studentNumber += allLessons[index].numeroEstudantes;
  }
  return studentNumber;
};
console.log(studentCount());

const keyValueObj = obj => {
  for (const key in obj) {
    console.log(key)
  }
};
keyValueObj(lesson1);

const objValueKeyVerify = (obj, key, value) => {
  if (obj[key] && obj[value]) {
    return true;
  } else {
    return false;
  }
};

console.log(objValueKeyVerify(lesson3, 'turno', 'noite'));
