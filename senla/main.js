
let additionNumbers = 30 + 70,
	differenceNumbers = additionNumbers - 20,
	multiplicationNumbers = differenceNumbers * differenceNumbers,
	divisionNumbers = multiplicationNumbers / additionNumbers,
	squareNumber =  divisionNumbers ** 2,
	shieldinExample = "\"Цитата\"";


const squareNumberText = `Квадрат числа ${divisionNumbers} равен ` + squareNumber;

if(shieldinExample != ''){
	console.log('Переменная не пустая');
}else{
	console.log('Переменная пустая');
}

try {

  squareNumber1;

} catch(err) {

  console.log(err);

}