
//Итерация 4

let additionNumbers = 30 + true,
	differenceNumbers = additionNumbers - 20,
	multiplicationNumbers = differenceNumbers * differenceNumbers,
	divisionNumbers = multiplicationNumbers / additionNumbers,
	squareNumber = divisionNumbers ** 2,
	shieldinExample = "\"Цитата\"";


const squareNumberText = `Квадрат числа ${divisionNumbers} равен ` + squareNumber;

if (shieldinExample != '') {
	let info = 'Переменная не пустая';
} else {
	let info = 'Переменная пустая';
}

try{

	squareNumber1;

} catch(err) {

	console.log(err);

}

textFirstLinkMenu = document.querySelector(".block2-a");
elemH1 = document.querySelector(".block-hs h1");
elemInput = document.querySelector("#textarea");

textFirstLinkMenu.textContent = "Текст этой ссылки был изменен";

textFirstLinkMenu.onmouseover = function(){
	this.style.background = '#ff0000';
};
textFirstLinkMenu.onmouseout = function(){
	this.style.background = '#808080';
};

// Отдельная функция, и её вызов в обработчике

textFirstLinkMenu.onclick = function(e){
	e.preventDefault();
	showAlert();
};

function showAlert(){
	alert('Вы кликнули по кнопке');
}

elemInput.onfocus = function(){
	elemInput.style.background = "#ff0000";
};
elemInput.onblur = function(){
	elemInput.style.background = "#ffffff";
};


function changeBackgroundOnClick(element) {
	element.onclick = function () {
		this.style.background = '#f0f0f0';
	};
};
changeBackgroundOnClick(elemH1);

// Итерация 5

// Стрелочная функция, параметр по умолчанию
let addition = (a, b = 50) => a + b;
let additionExsample = addition(5);

// Spread оператор
function foo(x, y, z) {
    console.log(x, y, z);
}

let arr = [1, 2, 3];
foo(...arr); // 1 2 3

// Rest оператор

function foo2(...args) {
    console.log(args);
}
foo2(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]


// yield
function *infiniteNumbers() {
    let n = 1;
    while (true) {
        yield n++;
    }
}

var numbers = infiniteNumbers(); // возвращает перебираемый объект

numbers.next(); // { value: 1, done: false }
numbers.next(); // { value: 2, done: false }

// Деструктуризация объекта

let article = {
  title: "Статья 1",
  text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, placeat!",
  wordСount: 200
};

let {title, text, wordСount} = article;
console.log(title);

// Класс 

class Car {
  constructor(name) {
    this.rubles = 0;
    this.name = name;
  }
  price(rubles) {
    this.rubles = rubles;
    alert(`${this.name} стоит ${this.rubles} руб.`);
  }
}

class Brand extends Car {
  price(rubles) {
    super.price(rubles);
	alert(`Нету? Тогда ${this.name} прячется!`);
  }

}

let rabbit = new Brand("Audi");

//rabbit.price("2 000 000");


