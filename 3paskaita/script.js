// console.log("trecia paskaita switch, termary operatoriai, for ciklas" );

// const number = 6;




// // argumentas key turi atitikti case reiksmę
// if (number === 1) {

//     console.log("Pirmadienis");
//     } else if (number === 2) {
//     console.log("Antadienis");
//     } else if (number === 3) {
//     console.log("Treciadienis");
//     } else if (number === 4) {
//     console.log("Ketvirtadienis");
//     } else if (number === 5) {
//     console.log("Penktadienis");
//     } else if (number === 6 || number === 7) {
//     console.log("Savaitgalis");
//     } else {
//     console.log("Blogai irasyta savaites diena");
//      }


// switch (number){
//     case 1:
//         console.log("Pirmadienis");
//         break;
//     case 2:
//         console.log("Antradienis");
//         break;
//     case 3:
//         console.log("Treciadienis");
//         break;
//     case 4:
//         console.log("ketvirtadienis");
//         break;
//     case 5:
//         console.log("Penktadiensi");
//         break;
//     case 6:
        
//     case 7:
//         console.log("Savaitgalis");
//         break;
//     default:
//         console.log("Blogai irasyta savaites diena");
//         break;

// } 



//Ternary simboliai?:
  // ? if
  // : else

// const age = 15;
// const legalAge = 18;
// const drinkingAge = 20;
// const celciusDegrees = 10;

// let result = "pilnametis";

// if (age <legalAge) {
//     result = "nepilnametis";
// }

// //                     if salyga         patenkina           else
// const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
// const drink = age >= drinkingAge ? "Beer" : "Milk";
// const weather = celsiusDegrees <= 0 ? "Cold" : celciusDegrees <= 25 ? "Warm" : "Hot";

// console.log(weather);
// console.log(drink);


//naudoti template string tik tada, kai dedame kintamuosius i vidu
const myName = "Jurga";
const surName = "Ragauskiene";

console.log(myName + " " + surName);
console.log(`${myName} ${surName}`);


const fullNameOld = myName + " " + surName;
const fullNameNew = `${myName} ${surName}`;