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


//1 - map() - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
(() => {
  const result = [];
  const formattedBookNames = () => {
    books.map((books) => {
      let bookName = books.name.toUpperCase().split(' ').join('_');
      let bookGenre = books.genre.toUpperCase().split(' ').join('_');
      let bookAuthor = books.author.name.toUpperCase().split(' ').join('_');
      return result.push(`${bookName} - ${bookGenre} - ${bookAuthor}`);
    });
    console.log(result);
  };
  //formattedBookNames();
})();



// 2 - map() && sort() - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
(() => {
  const result = [];
  const nameAndAge = () => {
    books.map((books) => {
      let bookAge = Number(books.releaseYear) - Number(books.author.birthYear);
      let authorName = books.author.name;
      result.push({ age: bookAge, author: authorName });
      result.sort((value1, value2) => value1.age - value2.age);
    });
    console.log(result)
  };
  //nameAndAge();
})();


// 03 - filter() - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
(() => {
  const fantasyOrScienceFiction = () => {
    const result = books.filter((books) => books.genre === 'Ficção Científica' || books.genre === 'Fantasia');
    console.log(result);
  };
  //fantasyOrScienceFiction();
})();


// 04 - filter() && sort() - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
(() => {
  const oldBooksOrdered = () => {
    const result = books.filter(books => (2021 - books.releaseYear) > 60);
    result.sort((value1, value2) => value1.releaseYear - value2.releaseYear);
    console.log(result);
  }
  oldBooksOrdered();
})()