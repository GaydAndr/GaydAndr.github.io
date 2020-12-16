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


// let first = 10;
// let second = 20;
// let result = +first + +second;
// document.write("Результат: " + result);

// let user_name = prompt("Вкажіть Ваше ім'я: ");
// let age = prompt("Вкажіть Ваш вік: ");
// alert("Hello, " + user_name + "! You are " + age + " years old.")


// document.write("Ім'я: " + user_name);
// document.write("Вік: " + age);

// *

// let number_1 = prompt("Вкажіть перше число: ");
// let number_2 = prompt("Вкажіть друге число: ");

// if (number_1 > number_2) {
// 	alert('Перше число більше -- ' + number_1 )
// }
// else if (number_1 < number_2) {
// 	alert('Друге число більше' + number_2 )
// }
// else {
// 	alert('Два числа рівні між собою ' + number_1 + '=' + number_2)
// }

let m_number = prompt('Введіть номер місяця: ');






switch (m_number) {
	case '1':
		document.write('Січень');
		
		break
	case '2':
		document.write('Лютий');
		break
	case '3':
		document.write('Березень');
		break
	case '4':
		document.write('Квітень');
		break
	case '5':
		document.write('Травень');
		break
	case '6':
		document.write('Червень');
		break
	case '7':
		document.write('Липень');
		break
	case '8':
		document.write('Серпень');
		break
	case '9':
		document.write('Вересень');
		break
	case '10':
		document.write('Жовтень');
		break
	case '11':
		document.write('Листопад');
		break
	case '12':
		document.write('Грудень');
		break
	default: alert('Такого місяця немає!')
	
}

switch (m_number) {
	case '1':
		
}

if (m_number <= 2 || m_number == 12) {
	document.write(' - Зима')
}
else if(m_number >= 3 && m_number <=5){
	document.write(' - Весна')
}
else if(m_number >= 6 && m_number <=8){
	document.write(' - Літо')
}
else if(m_number >= 9 && m_number <=11){
	document.write(' - Осінь')
}
else {
	document.write('Такого місяця немає!')
}