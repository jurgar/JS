// One  line komentaras


/*
Sveiki cia yra
Multi line komentaras
*/

// sukuriam kintamuosius 
let myName;
let age;
let mySurname;
let fullName;
let rezult;
let avarage;
let percent;

console.log(myName); //undefined- tipas

//priskiriam kintamiesiams reiksmes
myName = "Jurga"; // string - reiksme tarp kabuciu
age = 46; // number - reiksme apsirasanti is skaiciu. 10, 3.14 ....
mySurname = "Ragauskiene";
fullName= myName + ' ' + mySurname; // sudetis - vyksta tarp dvieju tokiu paciu tipu
result = age + age + age -9; //46+46+46-9=129
result = result + result; //129+129=258
average = (8 + 8 + 9 + 10 +10)/5 ; //(45) /5 =9
// is viso surinkta 60 eur, as atnesiau 20 eur
percent = (100*20)/60;  // 33.33
percentOutput = percent + "%";

console.log(myName);

/*
console.log(percent);
console.log(percent + '%');
console.log(average);
console.log('$' + average);
console.log(9+9); //18
console.log( '9' + '9');  // 99
console.log('760' + 40); //76040
*/

//sukuriam kintamuosius su const

const myDogName = "cipas";
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveikas" + " " + myDogName + "!";


let question = "How are you?"

console.log(question);




//1.kada naudoti let ir kada const? 
// naudoti let - tik tada, kai reiksme yra kintanti, atvejais naudoti const
//2.sukurus kintamaji - visada priskiriam pradine reiksme.
//3.visada naudojame triguba lygybe( tikrina reiksme ir tipa)
//4.visos neigiamos reiksmes yra- underfined, null, 0, "", false

//string, number, boolean(bool)

const yes =true;
const no = false;
let isAdult =true;


// console.log(10==15); //"10" yra lygus "15" = false
// console.log(10==10); //"10" yra lygus "10" = true
// console.log(10 != 10); // 10 yra nelygu 10 = false
// console.log(5 != 4); //5 yra nelygu 4= true

//dviguba lygybe tikrina ar reiksme yra lygi
// console.log("5" == 5);
//triguba lygybe tikrina ar reiksme yra lygi ir tipas toks pat
// console.log("5" === 5);



console.log("4" != 4);
console.log("4" !== 4);





// function testNum(myDogAge){
// let result;
// if (myDogAge > 8){
//     result = 'daugiau uz 8';
// }
// else{
//     result = 'maziau uz 8';
// }
// return result;
// }
// console.log(testNum());

