// Global variables to be used in the exercises
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

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];

const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

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
    let result = books.reduce((init, value) => ` ${init += value.author.name},`, '');
    return result = result.slice(1, -1) + '.';
  }
  // console.log(reduceNames());
})();


// 03 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.
(() => {
  // toFixed() returns a string value.
  const averageAge = () => {
    //  Input Raphael
    return books.reduce((gather, value, _ ,arr) => gather += (value.releaseYear - value.author.birthYear) , 0) / books.length;
  };
  // console.log(averageAge());
})();


// 04 - Encontre o livro com o maior nome.
(() => {
  const longestNamedBook = () => {
    return books.reduce((gather, value) => { if (gather.name.length < value.name.length) gather = value; return gather});
  };
  // console.log(longestNamedBook());
})();


// 05 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra "a" maiúscula ou minúscula.
(() => {
  console.log(JSON.stringify(names).match(/a/gi).length)
})();

(() => {
  const containsA = () => {
    return names.reduce((gather, value) => {
      gather += value.split(''); 
      return gather.toUpperCase().match(/A/g).join('')
    },'').length;   
  }
  // console.log(containsA());
})();


// 06. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas } . Para isso vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos , aqui além de reduce será necessário utilizar também a função map . Dica: Você pode acessar o index do array dentro de map , e você pode ver o objeto esperado na constante expected .

(() => {
  const studentAverage = () => {
    gradesAvgList = grades.map((value, index) => ({
      name: students[index], 
      average: value.reduce((acc, value) => {acc += value; return acc}, 0) / value.length,
    }));
    console.log(gradesAvgList);
  };
  studentAverage();
})()

