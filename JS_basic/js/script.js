// let helloMsg = " Hello from JS";

// function printString(string) {
// 	document.write(string.bold());
// }

// function printHello() {
// 	printString(helloMsg);
// }

// printHello();

// let apples = prompt("Apples?");
// let oranges = prompt("Oranges?");
// let fruits = +apples + +oranges;
// document.write("Fruits: " + fruits);


let first = 10;
let second = 20;
let result = +first + +second;
document.write("Результат: " + result);

let user_name = prompt("Вкажіть Ваше ім'я: ");
let age = prompt("Вкажіть Ваш вік: ");
alert("Hello, " + user_name + "! You are " + age + " years old.")
// document.write("Ім'я: " + user_name);
// document.write("Вік: " + age);

// *

let number_1 = prompt("Вкажіть перше число: ");
let number_2 = prompt("Вкажіть друге число: ");

if (number_1 > number_2) {
	alert('Перше число більше -- ' + number_1 )
}
else if (number_1 < number_2) {
	alert('Друге число більше' + number_2 )
}
else {
	alert('Два числа рівні між собою ' + number_1 + '=' + number_2)
}

let m_number = prompt('Введіть номер місяця: ');

switch (m_number) {
	case '1':
		alert('Січень');
		break
	default: alert('Такого місяця немає!')
	
}