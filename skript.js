// Задание 1
let min = (a, b) => {return a <= b ? a : b;};

console.log(min(8, 9));

// Задание 2 
function evenNumber() {
    let number = prompt(`Введите чесло для проверки чётности`);

    if (number % 2 == 0) {
        return `Чесло чётное`
    } 
    else {
        return `Чесло нечётное`
    }
}

console.log(evenNumber());

// Задание 3 
function numberRoot() {
    let number = prompt(`Введите чело для определения кводрата`);

    if (number) {
        return number * number;
    }
}

console.log(numberRoot());

// Задание 4
function age() {
    let correctAge = prompt("Сколько вам лет?");

    if (correctAge >= 0 && correctAge <= 12) {
        return 'Привет, друг!'
    } 
    else if(correctAge > 12 && correctAge <= 115) {
        return 'Добро пожаловать!'
    }
    else {
        return `Вы ввели неправильное значение`
    }
}
console.log(age());

// Задание 5 
function composition() {
    let numberOne = prompt(`Введите первое чело для произведения`);
    let numberTwo = prompt(`Введите второе чело для произведения`);

    if (isNaN(numberOne) == false && isNaN(numberTwo) == false) {
        return numberOne * numberTwo;
    } 
    else {
        return`Одно или оба значения не являются числом`
    }
}
console.log(composition());

// Задание 6 
function cubeNumber() {
    let number = prompt(`Введите значение для введение его в куб`);

    if (isNaN(number)) {
        return'Переданный параметр не является числом'
    } 
    else {
        return`${number} в кубе равняется ${number ** 2}`
    }
}

console.log(cubeNumber());

// Задание 7
function getArea() {
    return 3.14 * this.radius ** 2
}

function getPerimeter() {
    return 2 * 3.14 * this.radius
}

const cricle1 = {
    radius : 13,
    getArea : getArea,
    getPerimeter : getPerimeter 
}
const cricle2 = {
    radius : 17,
    getArea : getArea,
    getPerimeter : getPerimeter
}

console.log(cricle1.getArea());
console.log(cricle1.getPerimeter());
console.log(cricle2.getArea());
console.log(cricle2.getPerimeter());
