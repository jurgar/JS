// zinoti primityvius duomenu tipus ir ju apibrezima.
//boolean object
//number object
//string object

/*
Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.
There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
*/

const name = "Rokas"
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null;

const isHotString = Boolean(isHot).toString();

// console.log(isHot+ isHot);
// console.log(isHotString + isHotString);

const count = "15";

const countNumber = Number(count);

//console.log(count + count);
//console.log(countNumber + countNumber);

//integer - sveikasis skaicius
//console.log(Number.isInteger(5.5));

//paverciam i String
const myNumber = 5.752;
// console.log(Number(5.752).toString());
// console.log(myNumber.toString());

//uzapvalina po kablelio
// console.log(myNumber.toFixed(2));

// 3.75+ 2.4+3.32 *0.17

const salary = 10.7413666666;
// console.log(salary.toFixed(2));


const sentence = "My name is Jurga and I am very happy";

//suranda string kito stringo dali. Case- sensitive (didziosiso, mazosios raides)
//console.log(sentence.includes("happy"));
// console.log(sentence.slice(0, 5)); //pradzia ir pabaiga
// console.log(sentence.slice(8)); //nuo pradioz iki pabaigos
// console.log(sentence.slice( -5));//nuo galo

// const badText = "  Help  "
// //console.log(badText.trim()); //nuima tuscius tarpus nuo priekio ir galo

const upperCased = sentence.toUpperCase(); //visas raides padaro didziasias
console.log(upperCased);

const lowerCased =sentence.toLowerCase(); // visas raides padaro mazasias
console.log(lowerCased); 


//patikrtina ar stringai yra vienodi (not)
function areSameString(firstString, secondString){
    return firstString.toUpperCase() === secondString.toUpperCase();
}
//console.log(areSameString("Rokas","rokas"));

const resultCount= 5;
const dog = "Rikis";

// pakartoja stringa tiek kiek paduodam i argumenta
const result = dog.repeat(resultCount);

//console.log(result);
//let result = "";

//for (let i =0, i< resultCount ; i++ ){
   // result +=dog;
// }

const tagInput = "Prekyba Marketingas Programavinas";
const tags = tagInput.split(" ");

const countryInput = "Anglija, Sveicarija, Amerika, Latvija";
const countries = countryInput.split(", ");

console.log(tags);
console.log(countries);


const isLegalAge = true;

console.log(isLegalAge); // Atvaizduos kaip boolean
console.log(isLegalAge.toString()); // Atvaizduos kaip string


const milkPrice = 3.49; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice)) {
  alert("Centų nereikia")
} else{
  alert("Centų prireiks...")
}

const milkPrice = 3.677; // Vėliau pakeisti kainą į 3

if (Number.isInteger(milkPrice)) {
  alert("Centų nereikia")
} else{
  alert("Centų prireiks...")
}

alert(milkPrice.toFixed(2))