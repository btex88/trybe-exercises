/*
- The filter() method does not modifies the original array, instead it simply returns an new array containing the filtered elements.

- The filter() method validates its condition through its own callback function.

*/

let beer = [
  {
    code: 123,
    producer: "Urquell",
    description: "Pilsner Urquell 500ML",
    value: 20,
    stockPile: 200,
  },
  {
    code: 176,
    producer: "Schornstein",
    description: "Schornstein Imperial 500ML",
    value: 35.99,
    stockPile: 150,
  },
  {
    code: 122,
    producer: "Schornstein",
    description: "Schornstein IPA 500ML",
    value: 18.99,
    stockPile: 300,
  },
  {
    code: 323,
    producer: "Maniacs",
    description: "Maniacs Craft Lager 355ML",
    value: 19.99,
    stockPile: 500,
  },
  {
    code: 183,
    producer: "Leuven",
    description: "Leuven Red ALE Knight 600ML",
    value: 25.99,
    stockPile: 99,
  },
  {
    code: 129,
    producer: "Leuven",
    description: "Leuven Witbier The Witch 500ML",
    value: 19.99,
    stockPile: 200,
  },
  {
    code: 451,
    producer: "Lupulus",
    description: "Lupulus Blanche 330ML",
    value: 29.99,
    stockPile: 0,
  },
];


// Using a classic for statements
(() => {
  const beerFilter = (beer) => {
    const beerTil25 = [];
    for (let index = 0; index < beer.length; index += 1) {
      if (beer[index].value < 25) {
        beerTil25.push(beer[index]);
      }
    }
    return beerTil25;
  };
  console.log(beerFilter(beer));
})();

// Using filter() method.
(() => {
  const beerFilter = beer => beer.filter()
})();