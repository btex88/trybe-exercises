/*
Const segment extracted from:
https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5
*/

const states = [
	{ label: '-- Select Your State Here --' },
	{ value: 'AC', label: 'Acre' },
	{ value: 'AL', label: 'Alagoas' },
	{ value: 'AP', label: 'Amapá' },
	{ value: 'AM', label: 'Amazonas' },
	{ value: 'BA', label: 'Bahia' },
	{ value: 'CE', label: 'Ceará' },
	{ value: 'DF', label: 'Distrito Federal' },
	{ value: 'ES', label: 'Espírito Santo' },
	{ value: 'GO', label: 'Goías' },
	{ value: 'MA', label: 'Maranhão' },
	{ value: 'MT', label: 'Mato Grosso' },
	{ value: 'MS', label: 'Mato Grosso do Sul' },
	{ value: 'MG', label: 'Minas Gerais' },
	{ value: 'PA', label: 'Pará' },
	{ value: 'PB', label: 'Paraíba' },
	{ value: 'PR', label: 'Paraná' },
	{ value: 'PE', label: 'Pernambuco' },
	{ value: 'PI', label: 'Piauí' },
	{ value: 'RJ', label: 'Rio de Janeiro' },
	{ value: 'RN', label: 'Rio Grande do Norte' },
	{ value: 'RS', label: 'Rio Grande do Sul' },
	{ value: 'RO', label: 'Rondônia' },
	{ value: 'RR', label: 'Roraíma' },
	{ value: 'SC', label: 'Santa Catarina' },
	{ value: 'SP', label: 'São Paulo' },
	{ value: 'SE', label: 'Sergipe' },
	{ value: 'TO', label: 'Tocantins' },
];


function addStateList() {
	for (let index = 0; index < states.length; index += 1) {
		const statesElement = document.querySelector('#state');
		const createOptionElement = document.createElement('option');
		createOptionElement.classList.add('state-list');
		statesElement.appendChild(createOptionElement);
		document.querySelectorAll('option')[index].innerHTML = states[index].label;
	}
}
addStateList();

const allInputNodeList = document.querySelectorAll('input');
console.log(allInputNodeList);

const allTextareaNodeList = document.querySelectorAll('textarea');
console.log(allTextareaNodeList);

const inputAndTextareaArray = [];

function getInputAndTextareaArray() {
  for (let index = 0; index < allInputNodeList.length; index += 1) {
    inputAndTextareaArray.push(allInputNodeList[index]);
  }

  for (let index = 0; index < allTextareaNodeList.length; index += 1) {
    inputAndTextareaArray.push(allTextareaNodeList[index]);
  }
  return inputAndTextareaArray;
}

function addRequiredAttributes() {
  const inputAndTextareaArray = getInputAndTextareaArray();
  for (let index = 0; index < inputAndTextareaArray.length; index += 1) {
    inputAndTextareaArray[index].setAttribute('required');
  }
} 
addRequiredAttributes();

const picker = datepicker('.some-input', { showAllDates: true });

//   document.querySelector('button').addEventListener('click', (event) => {
// 	event.preventDefault();
//   // Chamar função
// });
