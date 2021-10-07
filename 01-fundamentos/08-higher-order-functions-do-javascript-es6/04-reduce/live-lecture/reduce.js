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

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];


// 01 - Dada uma matriz, transforme em um array.
(() => {
  const flatten = () => {
    let result = arr.reduce((initValue, value) => initValue += ',' + value);
    return result = result.split(',');
  };
  // console.log(flatten());
})();


// 02 - Crie uma string com os nomes de todas as pessoas autoras.
(() => {
  const reduceNames = () => {
    let result = books.reduce((init, value) => init += ' ' + value.author.name + ',', '');
    return result = result.slice(1, -1);
  }
  // console.log(reduceNames());
})();


// 03 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
(() => {
  const averageAge = () => {
    let result = books.reduce((gather, value, index ,arr) => gather += (value.releaseYear - value.author.birthYear) / arr.length, 0);
    return result.toFixed();
  };
  // console.log(averageAge());
})();


// 04 - Encontre o livro com o maior nome.
(() => {
  const longestNamedBook = () => {
    const result = books.reduce((gather, value) => {
      if (gather.name.length < value.name.length) {
        gather = value;
      }
      return gather;
    });
    return result;
  };
  // console.log(longestNamedBook());
})();

// 05 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.
(() => {
  const containsA = () => {
    let resultUpper = names.reduce((gather, value) => {gather += ',' + value.split(''); return gather.match(/A/g).join('')},'').length;
    let resultLower = names.reduce((gather, value) => {gather += ',' + value.split(''); return gather.match(/a/g).join('')},'').length;  
    return {A: resultUpper, a: resultLower};
  }
  console.log(containsA());
})()