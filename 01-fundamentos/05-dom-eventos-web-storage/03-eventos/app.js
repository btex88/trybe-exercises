function createDaysOfTheWeek() {
	const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
	const weekDaysList = document.querySelector('.week-days');

	for (let index = 0; index < weekDays.length; index += 1) {
		const days = weekDays[index];
		const dayListItem = document.createElement('li');
		dayListItem.innerHTML = days;

		weekDaysList.appendChild(dayListItem);
	}
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 01
/*
Exercício 1:
- O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 

- Note que os dias 29 e 0 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

- Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>

- Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . 
    Ex: <li class="day holiday">24</li>

- Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
*/

const body = document.body;
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const listDay = document.querySelector('#days');

function createAllCalendarDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const createDay = body.createElement('li');
    const  selectDay = dezDaysList[index];
    createDay.innerHTML = 'selectDay';
    createDay.classList.add('holiday');
    if (selectDay === 24 || selectDay === 25 || selectDay === 30) {
      createDay.classList.add('holiday');
    }
    if (selectDay === 4 || selectDay === 11 || selectDay === 18 || selectDay === 25) {
      createDay.classList.add('friday');
    }
    listDay.appendChild(createDay);
  }
}
createAllCalendarDays();

function createHolidayButton(string) {
  const buttonContainer = document.querySelector('.buttons-container');
  const button = document.createElement('button');
  button.setAttribute('id', 'btn-holiday');
  button.innerHTML = string;
  buttonContainer.appendChild(button);
}
createHolidayButton('Feriado')

//function changeHolidayBackground() {
// for ()let index = 0; index < }

function createFriday (fridayString) {
  const fridayButton = document.createElement('button');
  const getButtonContainer = document.querySelector('.buttons-container');
  fridayButton.innerHTML = fridayString;
  fridayButton.setAttribute('id', 'btn-friday');
  getButtonContainer.append(fridayButton);
}
createFriday()

function changeFridayText() {
  const getFridayButton = document.querySelector('#btn-friday');
  const fridayDayList = document.querySelectorAll('.friday');
  const fridayText = '#SEXTOU!!!';
  const fridayArray = [];

  for (let index = 0; index < fridayDayList.length; index += 1) {
    fridayArray.push(fridayDayList[index].innerHTML)
  }
  
  fridayButton.addEventListener('click', () => {
    for (let index = 0; index < fridayDayList.length; index += 1) {
      if (fridayDayList[index].innerHTML === fridayText) {
        fridayDayList[index].innerHTML = fridayArray[index];
      } else { 
        fridayDayList[index].innerHTML = fridayText;
      }
    }
  })
}
changeFridayText()

function changeTextSize() {
  const dayList = document.querySelectorAll('.day');
  for (let index = 0; index < dayList.length; index += 1) {
    dayList[index].addEventListener('mouseover', (event) => {
      event.currentTarget.style.fontSize = '2rem';
    })

  }
};
