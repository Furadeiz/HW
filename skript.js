// Основное задание по верстке макета
//мини игра Угадай число
document.getElementById('myButton').onclick = guessNumber;

function guessNumber() {
    
    let num = Math.floor(Math.random() * 100) + 1;

    while (true) {

    let answer = prompt(`Угадайте число от 1 до 100`);
        
        if (answer == '') {
            console.log(`Вы нечего не ввели`);
            continue;
        } 
        if (answer === null) {
            console.log(`Вы прервали игру`);
            return;
        }


        if( answer < num) {
            alert(`Введённое число меньше`);
        }
        else if( answer > num) {
            alert(`Введённое число больше`);
        }
        else {
            alert(`Вы угадали число`);
            console.log(`Поздравляю`);
            return;
        }
    }
}

// мини игра Простая арефметика
document.getElementById('myButton').onclick = simpleArithmetic;
function simpleArithmetic() {

    while (true) {
        
    let taskSumAddentOne = Math.floor(Math.random() * 100);
    let taskSumAddentTwo = Math.floor(Math.random() * 100);
    let taskSumAddentResult = taskSumAddentOne + taskSumAddentTwo;

    let taskSubtAddentOne = Math.floor(Math.random() * 100);
    let taskSubtAddentTwo = Math.floor(Math.random() * 100);
    let taskSubtAddentResult = taskSubtAddentOne - taskSubtAddentTwo;


   let taskMultAddentOne = Math.floor(Math.random() * 10);
    let taskMultAddentTwo = Math.floor(Math.random() * 10);
    let taskMultAddentResult = taskMultAddentOne * taskMultAddentTwo;


    let taskDivisionAddentOne = Math.floor(Math.random() * 10);
    let taskDivisionAddentTwo = Math.floor(Math.random() * 10);
    let taskDivisionAddentResult = taskDivisionAddentOne / taskDivisionAddentTwo;



    let answerSum = prompt(`решите пример и напишите результат: ${taskSumAddentOne} + ${taskSumAddentTwo} = ?`);
    if(answerSum == ''){
        console.log(`Вы нечего не ввели`);
        continue;
    }
    if (answerSum == null) {
        console.log(`Игра прервона`);
        return;
    }
    taskSumAddentResult == answerSum ? alert(`Решение верное`) : alert(`Решение не верно`);


    let answerSubt = prompt(`решите пример и напишите результат: ${taskSubtAddentOne} - ${taskSubtAddentTwo} = ?`);
    if(answerSubt == ''){
        console.log(`Вы нечего не ввели`);
        continue;
    }
    if (answerSubt == null) {
        console.log(`Игра прервона`);
        return;
    }
    taskSubtAddentResult == answerSubt ? alert(`Решение верное`) : alert(`Решение не верно`);


    let answerMult = prompt(`решите пример и напишите результат: ${taskMultAddentOne} * ${taskMultAddentTwo} = ?`);
    if(answerMult == ''){
        console.log(`Вы нечего не ввели`);
        continue;
    }
    if (answerMult == null) {
        console.log(`Игра прервона`);
        return;
    }
    taskMultAddentResult == answerMult ? alert(`Решение верное`) : alert(`Решение не верно`);


    let answerDivision = prompt(`решите пример и напишите результат: ${taskDivisionAddentOne} / ${taskDivisionAddentTwo} = ?`);
    if(answerDivision == ''){
        console.log(`Вы нечего не ввели`);
        continue;
    }
    if (answerDivision == null) {
        console.log(`Игра прервона`);
        return;
    }
    taskDivisionAddentResult == answerDivision ? alert(`Решение верное`) : alert(`Решение не верно`);return;

    }
}

//мини игра Переверни текст
document.getElementById('myButton').onclick = reversText;
function reversText() {
    
    let userText = prompt(`Введите слово которое вы хотите перевернуть `);

    if (userText === null) {
        console.log(`Игра прервона`);
        return;
    }

    if (userText === '') {
        console.log(`Вы ничего не ввели`);
        return;
    }

    if (/\d/.test(userText)) {
        alert(`Вы ввели чесло вместо слова`);
        return;
    } 
    
    let rezultText = userText.split('').reverse().join('');
    alert(`Введёное вами слово ${userText} \n перевёрнутое слово ${rezultText}`);
    
}

// мини игра Простая векторина (типа того)
const quiz = [
    {
        question: "Какой цвет неба?",
        optons: ["1. Красный ", " 2. Синий ", "3. Зелёный ",],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в недели?",
        optons: ["1. Шесть ", " 2. Семь ", "3. восемь ",],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        optons: ["1. Четыре ", " 2. Пять ", "3. Шесть ",],
        correctAnswer: 2
    },
];

document.getElementById('myButton').onclick = startQuiz;

function startQuiz() {
    
let counter = 0;

let colorSky = prompt(`Отведте на вопрос : ${quiz[0].question} \n ${quiz[0].optons}`);

    if (colorSky == null || colorSky == '') {
            console.log(('Вы прервали викторину.'));
            return;
        }

if (colorSky == quiz[0].correctAnswer) {
    console.log(`Ответ верный`);
    counter++;
}else if(colorSky <= 3) {
    console.log(`Ответ не верный `);
}else {
    console.log('Вы ввели некоректный ответ');
}


let numberDay = prompt(`Отведте на вопрос : ${quiz[1].question} \n ${quiz[1].optons}`);

    if (numberDay == null || numberDay == '') {
            console.log(('Вы прервали викторину.'));
            return;
        } 

if (numberDay == quiz[1].correctAnswer) {
    console.log(`Ответ верный`);
    counter++;
}else if(numberDay <= 3) {
     console.log(`Ответ не верный `);
}else {
    console.log('Вы ввели некоректный ответ');
}


let numberFinger = prompt(`Отведте на вопрос : ${quiz[2].question} \n ${quiz[2].optons}`);

    if (numberFinger == null || numberFinger == '') {
            console.log(('Вы прервали викторину.'));
            return;
        } 

if (numberFinger == quiz[2].correctAnswer) {
    console.log(`Ответ верный`);
    counter++;
}else if(numberFinger <= 3){
     console.log(`Ответ не верный `);
}else {
    console.log('Вы ввели некоректный ответ');
}

console.log(`Количество правельных ответов : ${counter}`);

}


// Задания для работы с кодом 
// Задание 1
let js = 'js';
console.log(`Задание 1 : ${js.toUpperCase()}`);

// Задание 2 
function filterBySrt(arr,str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));
    
}
const array = ['Apple', 'Banana', 'Apricot', 'avocado', 'Ananas'];
const comparison = 'ap';

let rezultArray = filterBySrt(array, comparison);

console.log(`Задание 2 : ${rezultArray}`);

// Задание 3 
let rounding = 32.58884; 

let roundingFloor = Math.floor(rounding);
let roundingCeil = Math.ceil(rounding);
let roundingRound = Math.round(rounding);

console.log(`Задание 3.1 : ${roundingFloor}`);
console.log(`Задание 3.2 : ${roundingCeil}`);
console.log(`Задание 3.3 : ${roundingRound}`);

// Задание 4
let arrayMinMax = [52, 53, 49, 77, 21, 32 ];

let max = Math.max(...arrayMinMax);
console.log(`Задание 4 : ${max}`);
let min = Math.min(...arrayMinMax);
console.log(`Задание 4 : ${min}`);

// Задание 5
function rand(random) {
     return Math.floor(Math.random() * 10) + 1;
}
let rezultRandom = rand();
console.log(`Задание 5 : ${rezultRandom}`);


// Задание 6
let userLength = Number(prompt(`Введите число длина массива будет в двое меньше`));

if (isNaN(userLength) || userLength <= 0 )  {
    console.log(`Введите положительное число`);
}
else {
    function RandomNumber() {
     const arrayRandomNumber = [];
     const lengthArrayRandomNumber = Math.floor(userLength / 2);
    for (let i = 0; i < lengthArrayRandomNumber; i++) {
        let randomNumber = Math.floor(Math.random() * (userLength + 1));
        arrayRandomNumber.push(randomNumber);
    }
    console.log(`задание 6 : ${arrayRandomNumber}`);
    return arrayRandomNumber;
 }RandomNumber();
}
 
// Задание 7 
function randomRangeTwoNumber(userNumberOne, userNumberTwo) {
    let min = Math.min(userNumberOne, userNumberTwo);
    let max = Math.max(userNumberOne, userNumberTwo);

    let rezultRange = Math.floor(Math.random() * (max - min + 1)) + min;
    
        console.log(`задание 7 : ${rezultRange}`);
}

let One = Number(prompt(`Введите первое число`));
let Two = Number(prompt(`Введите второе число`));

randomRangeTwoNumber(One, Two);

// задание 8
let date = new Date;
console.log(date);

// задание 9 
let currentDate = new Date;

currentDate.setDate(currentDate.getDate() + 73)

console.log(currentDate);

// задание 10
function formatDate(date) {

const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();
const weekday = days[date.getDay()];

const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`Дата: ${day} ${month} ${year} - это ${weekday}. \n Время: ${hours}:${minutes}:${seconds} `)

}formatDate(new Date());