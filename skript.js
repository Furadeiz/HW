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
console.log(js.toUpperCase());

// Задание 2 
const array = ['Apple', 'Banana', 'Apricot', 'avocado', 'Ananas'];
const comparison = 'ap';

let lowerComparison = comparison.toLowerCase();

let filterArray = array.filter(array => array.toLowerCase().startsWith(lowerComparison));

console.log(filterArray);