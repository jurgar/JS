// const userName = "Jurga";
// const goodbye = "Viso gero" + " " + userName + " " + "lauksime sugrįžtant !";
// console.log(goodbye);

// //geresnis variantas

// const goodbye = `Viso gero ${userName}, lauksime sugrįžtant!`;

// const salary = 1000;
// const dollarSymbol = "$";
// console.log(`${dollarSymbol} ${salary}`);
// console.log(`$${salary}`);

// const price = 10;
// 1.

// if (price >= 10) {
//   console.log("Perku");
// } else {
//   console.log("Neperku");
// }

// arba;

// let result = "";
// if (price > 10) {
//   result = "Perku";
// } else {
//   result = "Neperku";
// }
// console.log(result);

// arba;

// let result1 = "Neperku";
// if (price > 10) {
//   result1 = "Perku";
// }
// comsole.log(result1);

// const hours = 12;

// if (hours <= 6) {
//   console.log("naktis");
// } else if (hours <= 12) {
//   console.log("rytas");
// } else if (hours <= 18) {
//   console.log("diena");
// } else if (hours <= 24) {
//   console.log("vakaras");
// }

// const hours = 0;
// let result = "";

// if (hours >= 0 && hours < 6) {
//   result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
//   result = "Rytas";
// } else if (hours >= 12 && hours < 18) {
//   result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
//   result = "Vakaras";
// } else {
//   result = "Netinkamas skaicius";
// }

// console.log(result);

// uzduotis-ternary operatory parasyti-  condition ? true:false

// const myMoney = 12;
// const price = myMoney >= 10 ? console.log("Perku") : console.log("Neperku");

// arba;

// const price = 10;
// const result = price > 10 ? "Perku" : "Neperku";

// const hours = 5;

// const message =
//   hours >= 0 && hours < 6
//     ? "Naktis"
//     : hours >= 6 && hours < 12
//     ? "Rytas"
//     : hours >= 12 && hours < 18
//     ? "Diena"
//     : hours >= 18 && hours <= 24
//     ? "Vakaras"
//     : "blogas laikas";

// console.log(message);

// // const myName = "Jurgita";
// // const count = myName.length;
// // console.log(count);

// // for (let i = 0; i < 1; i++) {
// //   console.log(myName.charAt(0));
// // }
// // for (let i = 7; i > 6; i--) {
// //   console.log(myName.charAt(6));
// // }

// // for (let i = 0; i < 7; i++) {
// //   console.log(i + 1, myName.charAt(i));
// // }

// // arba
// const myName = "Julija";

// const nameLength = myName.length;

// const firstChar = myName[0]; // charAt(0)

// const lastChar = myName[myName.length - 1]; // myName.charAt(nameLength - 1)

// console.log(firstChar);

// console.log(lastChar);

// console.log(myName.length);

// for (let i = 0; i < nameLength; i++) {
//   const char = myName[i];

//   console.log(char);
// }

// for (let i = 0; i < myName.length; i++) {
//   const char = myName[i];

//   console.log(`${i + 1} raide yra ${char}`);
// }

//Funkcijos
//turi return reiksme

// function square(number) {
//   // 5 * 5
//   return number * number;
// }

// const squared = square(5);

// console.log(squared);
// console.log(square(5));

// function cube(num) {
//   return num * num * num;
// }
// console.log(cube(5));

// function multiplication(num1, num2) {
//   return num1 * num2;
// }
// console.log(multiplication(7, 5));

// function sum(num1, num2) {
//   return num1 + num2;
// }
// console.log(sum(10, 15));

// function subtraction(num1, num2) {
//   return num1 - num2;
// }
// console.log(subtraction(22, 90));

// function divide(num1, num2) {
//   return num1 / num2;
// }
// console.log(divide(200, 20));

// function stringLength(string) {
//   return string.length;
// }
// console.log(stringLength("summer"));

// function compareNumber(num1, num2) {
//   //return num1>num2;
//   //arba
//   // return num1>num2 ? true: false;
//   //arba
//   //if (num1 > num2) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// }

// console.log(compareNumber(15, 12));

// function firstAndLastChar(string) {
//   //charAt
//   //slice(-1)
//   return string[0] + string.charAt(string.length - 1);
// }
// console.log(firstAndLastChar("Zveriukas"));

// //neturi return

// function showMessage(message) {
//   console.log(message);
// }

// // neturi argumentu
// function getRandomNumber() {
//   return Math.random();
// }
// showMessage("Jurga");

// console.log(getRandomNumber());

//        namu darbai

// 1. Sukurkite funkciją, į kurią paduosite vardą ir jį pa'alert'ins jį :)

// function getName(myName) {
//   console.log(myName);
// }
// getName("Jurgita");

// 2. ne visos funkcijos turi parametrus - sukurkite funkciją,
// kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5

// function getRandomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }
// console.log(getRandomNumber());

//.3 Sukurkite funkciją, kuri paims du parametrus - vardą ir pavardę - ir grąžins sumą šių žodžių ilgių
//(t.y. "Petras", "Slekys" => 12)

// function NameSurnameLength(name, surname) {
//   return name.length + surname.length;
// }
// console.log(NameSurnameLength("Pertas", "Slekys"));

// //4. Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abecelės raidę Hint: Jums reikės pirma sukurti Array su visomis raidėmis o funkcija paims pagal indeksą atitinkamą raidę.
// function getLetterByIndex(letters) {
//   const alphabet = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   return alphabet[letters];
// }
// console.log(getLetterByIndex(1));

// 5. Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti "sum", "sub", "div", "multi" (matematinės reikšmės - sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. Turite grąžinti atsakymą, kur n1 ir n2 atlikta matematinė operacija (pvz.: 5, 1, "sub" => 4; 6, 3, "sum" => 9...).

//6. Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita - gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje (pvz. squareNum(generateRandomNumber()) => 1...100).

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
function square(number) {
  return Math.pow(number, 2);
}
console.log(square(getRandomNumber()));
