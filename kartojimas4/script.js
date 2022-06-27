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

// uzduotis
// istrinti zalia ir balta naudojant slice methoda.

// const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// prideti oranzine spalva vietoj juodos, naudojnat spice
// const colorsList = colors.splice(4, 4, "orange");

// function removeSomeColor(array) {
//   return array.splice(2, 2);
// }

// removeSomeColor(colors);
// console.log(colors);

// function removeSomeColor(array) {
//   return array.splice(4, 1, "orange");
// }

// removeSomeColor(colors);
// console.log(colors);

//uzduotis
//isfiltruoti reiksmes kurios turi raide "e"

const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

//NEPADARYTA

// function letterE() {
//     const letters = colors;
// }
// console.log(colors.find((e) => e.charAt(0) === e.charAt(0).toLowerCase(e)));
// console.log(colors.find((element) => element == "e"));

// const lettersCount = (array) => {
//   const letters = array.filter(letter === "e");
//   return letters.lenght;
// };
// console.log(lettersCount(colors));
