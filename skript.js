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
startQuiz();

