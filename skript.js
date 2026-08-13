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