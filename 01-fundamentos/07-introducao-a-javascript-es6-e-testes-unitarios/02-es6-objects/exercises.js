const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
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
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
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
}

customerInfo(order);

const orderModifier = (order) => {
  const pizzaFlavours = Object.keys(order.order.pizza)
  // Adicione abaixo as informações necessárias.
  order.name2 = 'Luiz Silva';  
  return console.log(`Olá ${order.name2}, 
  o total do seu pedido de 
  ${pizzaFlavours[0]}, ${pizzaFlavours[1]}, e ${order.order.drinks.coke.type} é 
  R$ ${Number(order.order.drinks.coke.price) + Number(order.order.pizza.marguerita.price) + Number(order.order.pizza.pepperoni.price) - 5},00.
  `);
}

orderModifier(order);

/*
01 - Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  - Note que o parâmetro da função já está sendo passado na chamada da função.

02 - Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  - Modifique o nome da pessoa compradora.
  - Modifique o valor total da compra para R$ 50,00.
*/