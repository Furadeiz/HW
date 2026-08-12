// // Задание 1
// let password = 'пароль'; 
// let confirmation = String(prompt('Введите пароль'));

// if (confirmation === 'пароль') {
//     console.log('Пароль введен верно');
// } 
// else {
//     console.log('Пароль введен неправильно');
// }

// // Задание 2
// let c = Number(prompt('Введите число от 0 до 10'));
// c >= 0 && c<= 10 ? console.log('Верно'): console.log('Неверно');

// // Задание 3
// let d = prompt('Введите число');
// let e = prompt('Введите число');
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } 
// else {
//     console.log('Неверно');
// }

// // Задание 4
// let a = '2';
// let b = '3';

// console.log(+a + +b);

// // Задание 5 
// let monthNumber = Number(prompt('Введите номер месяца'));
// switch (monthNumber) {
//     case 1:
//         console.log('Январь')
//         break;
//     case 2:
//         console.log('Февраль')
//         break;
//     case 3:
//         console.log('Март')
//         break;
//     case 4:
//         console.log('Апрель')
//         break;
//     case 5:
//         console.log('Май')
//         break;
//     case 6:
//         console.log('Июнь')
//         break;
//     case 7:
//         console.log('Июль')
//         break;
//     case 8:
//         console.log('Август')
//         break;
//     case 9:
//         console.log('Сентябрь')
//         break;
//     case 10:
//         console.log('Октябрь')
//         break;
//     case 11:
//         console.log('Ноябрь')
//         break;
//     case 12:
//         console.log('Декабрь')
//         break;

//     default:
//         console.log('Вы ввели не номер месяца')
//         break;
// }





// Задание 1
for (let i = 0;  i < 2 ; i++) {
    console.log("Привет")
}

// задание 2
for (let i = 1;  i <= 5 ; i++) {
    console.log(i)
}

//Задание 3
for (let i = 7;  i <= 22 ; i++) {
    console.log(i)
}

// Задание 4
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400'
}

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`)
}

// Задание 5
let num = Number(0);
let n = Number(0);
for (n = 1000; n >= 50; n /= 2) {
    num++
}
console.log(`В результате получилось ${n}, потребовалось операций ${num}`);

// Задание 6 
for (let fiveDay = 7; fiveDay < 31 ; fiveDay += 7 ) {
    console.log(`Сегодня пятница, ${fiveDay}-е число. Необходимо подготовить отчет.`);
}