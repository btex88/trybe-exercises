// Parte 01

// EXE Objetos

function exe01() {
  console.log(`EXE Objetos\n`)
  
  let player = {
      name: `Marta`,
      lastName: `Silva`,
      age: `34`,
      medals: {
        golden: 2,
        silver: 3
      }
    }
    
  console.log(`- A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);
    
    player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
    
  console.log(`- A jogadora ${player.name} ${player.lastName} foi eleita melhor do mundo por ${player.bestInTheWorld.length} vezes`);
    
  console.log(`- A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata\n`);
  return player
}
// exe01()

// EXE For/in

function exe02() {
  console.log(`\nEXE For/in\n`);
  
  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  };
  
  for (let index in names) {
    console.log(`Olá ${names[index]}!`)
  }
  console.log(`\n`);
  
  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  
  for (let index in car) {
    console.log(`-`, index,`→`, car[index]);
  }
}
// exe02()

// EXE Function

function exe03() {
  // let player;
  // let names
  // let car
  
  console.log(`\nEXE Function\n`);
  
  function objects(player) {
    player = {
      name: `Marta`,
      lastName: `Silva`,
      age: `34`,
      medals: {
        golden: 2,
        silver: 3
      }
    }
    
    console.log(`- A jogadora ${player.name} ${player.lastName} tem ${player.age} anos de idade`);
    
    player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
    
    console.log(`- A jogadora ${player.name} ${player.lastName} foi eleita melhor do mundo por ${player.bestInTheWorld.length} vezes`);
    
    console.log(`- A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata\n`);
  }
  objects();
  
  function forIn(names, car) {
    
    names = {
      person1: 'João',
      person2: 'Maria',
      person3: 'Jorge'
    };
    
    for (let index in names) {
      console.log(`- Olá ${names[index]}!`)
    }
    
    console.log(`\n`);
    
    car = {
      model: 'A3 Sedan',
      manufacturer: 'Audi',
      year: 2020
    }
    
    for (let index in car) {
      console.log(`-`, index, `→`, car[index]);
    }
  }
  forIn();
}
// exe03()

