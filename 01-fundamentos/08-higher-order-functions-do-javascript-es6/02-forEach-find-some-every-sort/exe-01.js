const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 01 - find() - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
const authorBornIn1947 = () => {
  // escreva aqui o seu código
  const authorFind = (books) =>
    books.find((books) => books.author.birthYear === 1947);
  const authorFindName = authorFind(books).author.name;
  return authorFindName;
};
//console.log(authorBornIn1947());


// 2 - forEach() - Retorne o nome do livro de menor nome.
const smallerName = () => {
  const result = [];
  books.forEach((books) => result.push(books.name));
  result.sort((x, y) => x.length - y.length);
  return result[0];
};
//console.log(smallerName());


// 03 - Encontre o primeiro livro cujo nome possui 26 caracteres.
const getNamedBook = () => {
  let result;
  books.find((books) => {
    if (books.name.length === 26) {
      result = books;
    }
  });
  return result;
};
//console.log(getNamedBook());


//04 - Ordene os livros por data de lançamento em ordem decrescente.
const booksOrderedByReleaseYearDesc = () => {
  const result = [];
  books.forEach((books) => result.push(books));
  result.sort((x, y) => y.releaseYear - x.releaseYear);
  return result;
};
//console.log(booksOrderedByReleaseYearDesc());


// 05 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.
const everyoneWasBornOnSecXX = () => {
  return books.every(arg => arg.author.birthYear >= 1900);
}
//console.log(everyoneWasBornOnSecXX());


// 06 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
const someBookWasReleaseOnThe80s = () => {
  return books.some(arg => arg.releaseYear >= 1980 && arg.releaseYear < 1990);
}
//console.log(someBookWasReleaseOnThe80s());


// 07 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário.
const authorUnique = () => {
  const result = [];
  books.forEach(books => result.push(books.author.birthYear));
  return result.some((booksArr, index) => result.indexOf(booksArr) !== index);
  // IndexOf method extracted from https://dev.to/huyddo/find-duplicate-or-repeat-elements-in-js-array-3cl3
};

console.log(authorUnique());