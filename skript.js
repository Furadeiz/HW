// Основное задание по верстке макета

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

let counter = 0;

let colorSky = prompt(`Отведте на вопрос : ${quiz[0].question} \n ${quiz[0].optons}`);

    if (colorSky == null) {
            console.log(('Вы прервали викторину.'));
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

    if (numberDay == null) {
            console.log(('Вы прервали викторину.'));
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

    if (numberFinger == null) {
            console.log(('Вы прервали викторину.'));
        } 

if (numberFinger == quiz[2].correctAnswer) {
    console.log(`Ответ верный`);
    counter++;
}else if(numberFinger <= 3 ) {
     console.log(`Ответ не верный `);
}else {
    console.log('Вы ввели некоректный ответ');
}

console.log(`Количество правельных ответов : ${counter}`);


// Задания, для работы с кодом, 1

const item = [1, 5, 4, 10, 0, 3];

for (let element = 0 ; element < item.length; element++ ) {
    if (item[element] == 10){
        console.log(10);
        break;
    }
    console.log(item[element]);
}

//Задание 2 

for (let index = 0; index < item.length; index++) {
    if (item[index] == 4) {
        console.log(index)
    }
}

//Задание 3 

const figure = [1, 3, 5, 10, 20];

let joinResult  = figure.join(' ');

console.log(joinResult);

//Задание 4

const multiArray = [[1, 1, 1],[1, 1, 1],[1, 1, 1]];

console.log(multiArray);

//Задание 5 

const pushArray = [1, 1, 1];

for (let index = 0; index < pushArray.length; index++) {
    if (index == 0 ) {
        pushArray.push(2, 2, 2);
    }
}
console.log(`${pushArray}`);

// задание 6

const sortArray = [9, 8, 7, 'a', 6, 5];

for (let index = 0; index < sortArray.length; index++) {
    sortArray.sort().pop();

    console.log(`${sortArray}`);
    break;
}

//Задание 7

const guessNumber = [9, 8, 7, 6, 5];

let  answer = Number(prompt(`Угадайте число, которое есть в массиве, до 10 `)) ;

let resultAnswer = guessNumber.includes(answer);

    if (resultAnswer) {
        console.log(`Угадали`);
    } else {
        console.log(`Не угадали`);
    }

    // Задание 8

    let stringReverse = "abcdef";

    console.log(stringReverse.split('').reverse().join(''));

    // Задание 9

    const twoArray = [[1, 2, 3],[4, 5, 6]];

    let result = [].concat(...twoArray);
    console.log(result); 

    //Задание 10
    
    const sumTwoElement = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < sumTwoElement.length; i++) {
        if (i == sumTwoElement.length - 1) {
            console.log(sumTwoElement[i]);
        } else {
             let j = sumTwoElement[i] + sumTwoElement[i + 1]
        console.log(j);
        }
    }

    // Задание 11

    const array = prompt(`Введите несколько чисел до 10`);
    
    if (array) {
        const stringArray = array.split('');
        const numberArray = stringArray.map(Number);
        const squqreArray = numberArray.map(item => item ** 2);

        console.log(squqreArray);
    }

    //задание 12

    const arrayWords = prompt(`Введите слово`);
    
        if (arrayWords === null || arrayWords === '') {
            
            console.log(`Вы ничего не ввели`)
        }
        else{
            const arrayWordsLength = arrayWords.split('');
            const count = arrayWordsLength.length;
            console.log(`Количество символов в слове ${count}`);
        }

    //Задание 13

    const integerNumber = prompt(`Ввидите целые числа через пробел`);

    if (integerNumber === null || integerNumber === '') 
        {
            console.log(`Вы ничего не ввели`)
        }
        else{
            const separation =  integerNumber.split(' ');
            const filterNumber = separation.map(Number).filter(num => !isNaN(num)).filter(num => num < 0);

            console.log(filterNumber);
            }
    
    // Задание 14

    let userLength = prompt(`Введите какой длены массив вы хотите`);
    const length = Number(userLength);

    if (isNaN(length) || length <= 0) {
        console.log(`Введите положительное число`)
    } else {
        const numbers = [];

        for (let i = 0; i < length; i++) {
            const random = Math.floor(Math.random() * 11);
            numbers.push(random);
        }

        console.log('Исходный массив : ', numbers);

        const evenNumber = numbers.filter(num => num % 2 == 0);

        console.log('Чётные числа из массива : ', evenNumber);
    }
     
    // Задангие 15

    const lengthArray = 6;

    const arithmetic = [];

    if (lengthArray) {

    for (let i = 0; i < lengthArray; i++) {
        const random = Math.floor(Math.random() * 10) + 1;
        arithmetic.push(random);
       
    }
    const sum = arithmetic.reduce((acc, cur) => acc + cur, 0 );
    const resultArithmetic = sum / lengthArray;
    
    console.log("Массив:", arithmetic);
    console.log(`Среднее арифмитическое : ${resultArithmetic}`);
}