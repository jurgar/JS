//console.log("6paskaita.masyvai, funkcijos, evenmtai")

const myName = "Jurga";
// const nameLenght = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[myName.length-1];
// const middleChar = myName[Math.floor(myName.length /2)];


// for (let i =0; i <myName.length;  i++){
//     const char = myName[i];
//     // console.log(char); 

// arba
//     console.log(`${i+1}. ${char}`);
// }


// const firstChar = myName.charAt(0);
// const lastChar = myName.charAt(myName.length - 1);

// cost chars =["R", "o", "k", "a", "s"];
// const fruits = ["apple", "banana", "pear"];
// console.log(fruits.length);
// console.log(fruits[1]);


// for (let i = 0; i< fruits.length; i++){
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];



// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     if (student.length > 5) {
//         console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//     } else if (student.length < 5) {
//         console.log(`Vardas ${student} turi maziau nei 5 raides`);
//     } else {
//     console.log(`Vardas ${student} turi lygiai 5 raides`);
//     }
// }

// const basket = [7, 10, 0.5, 23, 41];
// let total = 0; 

// for( let i = 0; i < basket.length; i++){
//     const number = basket[i];
//     total +=number;
//     console.log(basket);
// }

// 1. void funkcija
// 2 return funkcija

// function square (number) {
//     console.log(number);

// }
// square(10);

function square (number) {
    return number * number;
}


const squareNumber = square(5);
console.log(squareNumber);

function logger(value){
    console.log(value);
}
const loggerValue = logger('Testing..');

logger(10);

function printAllArrayItems(array){
    for (let i=0; i<array.length; i++){
        const item = array[i];
        console.log(item);

    }
}
const students = ["Edvinas", "Liudmila", "Julija", "Rokas", "Asta"];
printAllArrayItems(students);

function repeatString(string, count){
    let finalString = "";

    for(let i = 0; i < count; i ++){
        finalString +=string;
    }
    return finalString;
}
const repeatedString = repeatString("Rokas", 5);
console.log(repeatedString);

function addition(a, b){
    return a+b;
}

function substracion(a,b){
    return a-b;
}
console.log(addition(5,4,))