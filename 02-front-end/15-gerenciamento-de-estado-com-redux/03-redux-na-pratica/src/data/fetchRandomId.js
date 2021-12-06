const url = 'https://www.uuidgenerator.net/api/version4/';

const fetchRandomId = () => {
  return fetch(url).then((data) => data.text());
};

export default fetchRandomId;
