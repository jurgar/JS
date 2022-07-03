// "rokas" => ["r", "o", "k", "a", "s"]
// array.length
// first item - [0],
// last item - [array.length - 1]

// array.forEach(callback)
// callback - (item, index) => {}
// array.forEach((item, index) => {})

// const names = ["Rokas", "Tomas", "Giedrius", "Martyna"];

// function addNewStudent(studentName) {
//   names.push(studentName);
// }
// console.log(names);
// addNewStudent("Antanas");
// console.log(names);

// array.push() - stumia i gala
// array.pop() - ismeta is galo
// array.unshift() - istumia i prieki
// array.shift() - ismeta is priekio

// function removeStudent() {
//   names.pop();
// }
// removeStudent();
// console.log(names);

// uzduotis
// susikurti masyva colors su reiksmemis "red", "blue", "green", "white", "black", "yellow", "purple".
// sukurti funkcija kuri priims  masyva colors ir grazins modifikuota.
// atlikite veiksmus su array metodais ir palikite masyve tik green ir yellow

// const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// function modifiedColors(favoriteColors) {
//   favoriteColors.pop();  red, blue, green, white, yellow
//   favoriteColors.shift();blue, green, white, black, yellow
//   favoriteColors.shift();green, white, black, yellow
//   favoriteColors.shift(); white, black, yellow
//   favoriteColors.shift();black, yellow
//   favoriteColors.shift(); yellow
//   favoriteColors.unshift("green"); green, yellow
// }
// modifiedColors(colors);
// console.log(colors);

// uzduotis
// Atlikite veiksmus su modifikuotu masyvu is praeitos uzduoties ir grazinkite masyva i pirmini.
// function backToStartingArray() {
//   colors.push("purple"); // green yellow purple

//   colors.shift(); // yellow purple

//   colors.unshift("red", "blue", "green", "white", "black"); // red blue green white yellow purple
// }

// backToStartingArray();

// console.log(colors);

//uzduotis
// apsukite visas rieksmes vietomi. "purple" turi buti pirma ir "red" paskutine

// function modifiedColors(favoriteColors) {
//   favoriteColors.reverse();
// }
// modifiedColors(colors);
// console.log(colors);

// array.forEach(colors);
// array.forEach((item, index) => {
// })

// uzduotis
//atspausdinti visas masyvo rieksmes naudojant array.forEach metoda.

// colors.forEach((color) => {
//   console.log(color);
// });

// colors.forEach((color) => {
//   console.log(color);
// });

// colors.forEach(showColor);

// function showColor(color) {

// console.log(color);

// }

// uzduotis
// sukurti nauja masyva kurio reiksmes bus padvigubintos pvz. "red" i "redred".
//panaudoti array.map metoda.

// function doubleArrayItem(array) {
//   return array.map((item) => item + item);
// }

// const doubledItems = doubleArrayItem(colors);
// console.log(doubledItems);
// console.log(colors);

// 1. uzduotis
// istrinti zalia ir balta naudojant slice methoda.

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

function removeGreenAndWhite(colorArray) {
  const sliced = colorArray.slice(0, 2);
  const sliced2 = colorArray.slice(-3);
  const combine = sliced.concat(sliced2);
  return combine;
}

const modifiedColors = removeGreenAndWhite(colors);

// 2.prideti oranzine spalva vietoj juodos, naudojnat spice

function addOrange(colorArray) {
  colorArray.splice(2, 1, "orange");
}

addOrange(modifiedColors);

// function removeSomeColor(array) {
//   return array.splice(4, 1, "orange");
// }

//3. uzduotis
//isfiltruoti reiksmes kurios turi raide "e"

const hasEchar = modifiedColors.filter((color) => color.includes("e"));
// "red".includes("e") => true
// "blue".includes("e") => true
console.log("hasEchar", hasEchar);

//4. uzduotis
// isfiltruoti kurioe turi maziau negu 4 raides

const shorterThan4Chars = modifiedColors.filter((color) => color.length < 4);
// "red".length < 4 => 3 < 4 => true
// "blue".length < 4 => 4 < 4 => false
// "orange".length < 4 => 6 < 4 => false
console.log("shorter than 4 chars", shorterThan4Chars);

//5.uzduotis  ar turi kas nors is ju raide "z"

const hasZChar = modifiedColors.some((color) => color.includes("z"));
console.log("has Z char", hasZChar);
// "red".includes("z") => false
// "blue".includes("z") => false

//6.

const hasBrownValue = modifiedColors.some((color) => color === "brown");
console.log("has brown", hasBrownValue);

const hasALetter = modifiedColors.filter((color) => color.includes("a"));
const aLetterCount = hasALetter.length;

console.log("has A letter", aLetterCount);
