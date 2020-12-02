
//Итерация 4

let additionNumbers = 30 + 70,
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

textFirstLinkMenu.onclick = function(e){
	e.preventDefault();
	alert('Вы кликнули по кнопке');
};

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

// Spread / Rest оператор
function foo(x, y, z) {
    console.log(x, y, z);
}
let arr = [55, 68, 13];
foo(...arr); 

// ‘super’ keyword
let parent = {
    foo() {
        console.log("Привет я Родитель!");
    }
}
let child = {
    foo() {
        super.foo();
        console.log("Привет я Ребёнок!");
    }
}
Object.setPrototypeOf(child, parent);
child.foo(); 

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
  hide() {
    alert(`Нету? Тогда ${this.name} прячется!`);
  }
}

let rabbit = new Brand("Audi");

rabbit.price("2 000 000");
rabbit.hide(); 



