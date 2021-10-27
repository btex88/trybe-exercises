const url =  `https://api.coincap.io/v2/assets`;
const container = document.querySelector('.container');
const currentCurrencies = 'https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=16416f9f881c1b6aa258'

// const getCurrentCurrencies = () => {
//   return fetch(currentCurrencies)
//   .then(response => response.json())
//   .then(currency => currency.USD_BRL)
//   .then(data => data)
//   .catch((error) => error)
// }

const getCoin = () => {
  fetch(url)
  .then(response => response.json())
  .then(coin => {
    coin.data.forEach((value, index) => {
      const createCryptoName = document.createElement('h3');
      const createCryptoValue = document.createElement('span');
      if (index < 2) {
        createCryptoName.classList.add(value.symbol.toLowerCase());
        createCryptoValue.classList.add(`${value.symbol.toLowerCase()}-value`);
        createCryptoName.innerText = value.name;
        createCryptoValue.innerText = `USD $${Number(value.priceUsd).toFixed(4)}`;
        container.appendChild(createCryptoName);
        container.appendChild(createCryptoValue);
      }
    })
  })
  .catch((error) => error) 
}

getCoin()
