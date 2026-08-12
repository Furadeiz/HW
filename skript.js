// Задание 1
let password = 'пароль'; 
let confirmation = String(prompt('Введите пароль'));

if (confirmation === 'пароль') {
    console.log('Пароль введен верно');
} 
else {
    console.log('Пароль введен неправильно');
}

// Задание 2
let c = Number(prompt('Введите число от 0 до 10'));
c >= 0 && c<= 10 ? console.log('Верно'): console.log('Неверно');

// Задание 3
let d = prompt('Введите число');
let e = prompt('Введите число');
if (d > 100 || e > 100) {
    console.log('Верно');
} 
else {
    console.log('Неверно');
}

// Задание 4
let a = '2';
let b = '3';

console.log(+a + +b);

// Задание 5 
let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case 1:
        console.log('Январь')
        break;
    case 2:
        console.log('Февраль')
        break;
    case 3:
        console.log('Март')
        break;
    case 4:
        console.log('Апрель')
        break;
    case 5:
        console.log('Май')
        break;
    case 6:
        console.log('Июнь')
        break;
    case 7:
        console.log('Июль')
        break;
    case 8:
        console.log('Август')
        break;
    case 9:
        console.log('Сентябрь')
        break;
    case 10:
        console.log('Октябрь')
        break;
    case 11:
        console.log('Ноябрь')
        break;
    case 12:
        console.log('Декабрь')
        break;

    default:
        console.log('Вы ввели не номер месяца')
        break;
}