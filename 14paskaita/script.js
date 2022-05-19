const fruits = ["Apple", "Orange", "Pear"];

// .pop ()- pasalina paskutini masyvo elementa ir ji grazina
// const lastElement =fruits.pop();
// fruits.pop()- veikia taip pat
// console.log(lastElement);
// console.log(fruits);

// .shift()- pasalina pirmaji masyvo elementa ir ji grazina

// const firstElement = fruits.shift();
// console.log(firstElement);
// fruits.shift();


// .push - prideda nauja elementai masyvo gala
// fruits.push("Pineapple");

//. unshift- prideda nauja elementa i masyvo pradzia
// fruits.unshift("Banana");

// fruits.unshift("Plum");
// fruits.push("Pineapple", "Banana");

// const upperCasedFruits = [];

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];

//     //     console.log(`${i}.${fruit}`);
//     // console.log(fruit);
//     const upperCased = fruit.toUpperCase();
//     upperCasedFruits.push(upperCased);
// }

// console.log(upperCasedFruits);
// console.log(fruits);


// Callback funkcija

function log(name){
    console.log(name);
}

function showAlert(callback){
    callback("Jurga");
}

const names =["bob", "hellen", "jack"];

// log("Jurga");
// showAlert(log);
// document.addEventListener("click", log)


// ciklas kuris praeina per visus masyvo elementus
// . forEach()

// names.forEach(showName);

// function showName(name,){
//     console.log(name);
// }

// names.forEach((name, index) => {  // array funnkcija, anonimine funkcija
//     console.log(index + name);
// });


// names.forEach( () => {}  )

//. map() - ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva
// const modifiedNames = names.map((name)=> {
    
//     return name.charAt(0).toUpperCase()+name.slice(1).toLowerCase();
// });

// console.log(names);
// console.log(modifiedNames);

const ages = [12, 15, 22, 27, 30, 35, 38];
// .filter -ciklas kuris eina per visus masyvo elementus ir grazina nauja masyva jeigu reiksme yra true(positive)

// const moreThanTwenty = ages.filter(age => {
//     return age >20;
// });
// console.log(moreThanTwenty);

// const lessThanTwenty = ages.filter((age) => age < 20);
// console.log(lessThanTwenty);

const cars =["BMW", "Lamborghini", "audi", "Lada", "Lexus"];
//suranda pirma elementa is masyvo, kuris atitinka kriteriju(true) ir ji grazina
// .find()
//  const foundCar = cars.find(car => car.charAt (0)==="L")

//  console.log(foundCar);

 // patikrina ar nors vienas elementa atitinka kriteriju ir grazina true arba false
 // .some()

//  const hasShortName = cars.some(car =>car.length < 4);
//  console.log(hasShortName);

// .every()- ptikrina ar kiekviena selementas atitinkaa kriteriju ir grazina true arba false

const isEveryUpperCased = cars.every(
    (car) =>car.charAt(0) === car.charAt(0).toUpperCase()
);
console.log(isEveryUpperCased);


