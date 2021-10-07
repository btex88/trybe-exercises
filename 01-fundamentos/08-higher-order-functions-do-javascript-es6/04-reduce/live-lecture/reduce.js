// Global const
const arr = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 01 - Dada uma matriz, transforme em um array.
(() => {
  const flatten = () => {
    let result = arr.reduce((initValue, value) => initValue += ',' + value);
    return result = result.split(',');
  };
  console.log(flatten());
})();


// 02 - Crie uma string com os nomes de todas as pessoas autoras.
(() => {
  const reduceNames = () => {
    let result = books.reduce((init, value) => init += ' ' + value.author.name + ',', '');
    return result = result.slice(1, -1);
  }
  console.log(reduceNames());
})();
