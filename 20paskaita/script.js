// pratimai 
// const p1 = new Person("Petras", 16)
// p1.compareAge() => "Petras is old enough to drink";

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	compareAge(other) {
// 		// Rašyti kodą čia
// 	}
// }

class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    isFat() {
        if(this.weight >=5){
            return `${this.name} yra storas kaciukas`;
        } else {
                return `${this.name} yra plonas kaciukas`;
        }
    }
}

const cat = new Cat ("Kleopatras", 7);
// console.log(cat.isFat());



// 2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių.
// Grąžinkite masyvą tik su skaičiais.

// pvz: finally([1, 5, "a", "g", "z", 6]) =>[1,5,6]
//arr.filter (x=>isNaN(x))

const randomArray = [1,5, "a", "g", "z", 6];

const removeNumbersFromArray = (array) =>array.filter((x)=>isNaN(x));
const removeLettersFromArray = (array) =>array.filter((x)=>!isNaN(x));
// isNaN(1)=>false
// isNaN(5)=>false
// isNaN("a")=> true
// isNaN("g")=> true


// const removedNumbers = removeNumbersFromArray(randomArray);
// const removedLetters = removeLettersFromArray(randomArray);
// console.log(removedNumbers);
// console.log(removedLetters);

// !true =>false
// !false =>true
// !!true => true
// !!false =>false
// !!"rokas" => true
//!"rokas =>false"

let test = "Petras 123 Slekys"
let s = "abc";
//split("") ["a", "b", "c"]
//map (char)=>"a", "a"
//join("") =>["a", "a"] =>"aa"

const newTest = test
.split("").map((char)=> (isNaN(char)? char+ char :char))
.join("");

//isNaN ("a")? "a"+ "a": "a" =>"aa"
//isNaN ("1")? "1"+ "1": "1"=>"1"

console.log(newTest)

const testString = "Rokas !@#$%^ Tomas 123"

// ats: "Rokas !!@@##$$%%^^ Tomas 112233"



// 4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas.
// Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių.
// Jei yra tarpų - post code neteisingas.
// Pvz: fn("abc123") => false; fn("12345") => true; fn("123ab") => true.


// patikrinti ar susideda is 5 skaiciu
//patikrinti ar susideda is 3 skiaciu ir 2 raidziu
//patikrinti ar turi tarpu

// const checkPostCode = (postCode)=> {
// const letters= removeLettersFromArray(postCode.split(""));
// const numbers = removeNumbersFromArray(postCode.split(""));

// console.log(letters);
// console.log(numbers);

//   if (postCode.includes(" ")) {
//     return false;
//   } else if (letters.length === 5) {
//     return true;
//   } else if (letters.length === 2 && numbers.length === 3) {
//     return true;
//   } else {
//     return false;
//   }
// };


// function checkPostCode(postCode) {
//     const letters = removeLettersFromArray(postCode.split(""));
//     const numbers = removeNumbersFromArray(postCode.split(""));
  
//     if (postCode.includes(" ")) {
//       return false;
//     } else if (letters.length === 5) {
//       return true;
//     } else if (letters.length === 2 && numbers.length === 3) {
//       return true;
//     } else {
//       return false;
//     }
//   }


const code = "1234"; // true

// console.log(checkPostCode(code));
// checkPostCode(code);




// namu darbai
//Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne,
// pagal jo amžių.

class Person {
    construction(name, age){
        this.name= name;
        this.age = age;
    }
    compareAge(){
        return this.age >= 20 ? `${this.name} is old enough to drink` : `${this.name} is not old enought to drink`
    }
}
const p1 = new Person("Petras", 10)
console.log(p1.compareAge());


// 5. Sukurkite funkciją, kuri priims array ir prie kiekvieno array elemento pridės "7", nebent elementas baigsis "7".
// pvz:
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) ➞ []

const jazzify = array => array.map(element => element.endsWith('7') ? element : element.concat('7'));
console.log(jazzify(["G", "F", "C"]));
console.log(jazzify(["Dm", "G", "E", "A"]));
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));
console.log(jazzify([]));