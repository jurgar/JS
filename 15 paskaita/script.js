// padeda istrinti arba iterpti masyvo elementa i paasirinkta vieta
// .slice()

// const sentence=["I", "study", "JavaScipt", "right", "now"];

//const firstTwoElements = sentence.splice(0, 2); //istrina pirmus 2 ir grazina
//sentence.splice(2,2); //nuo antrso vietos istrina 2
//sentence.splice(2, 1, "TypeScript"); // pakeicia masyvo elementa kitu
//sentence.splice(1,4, "studied", "TypeScript", "before");
//console.log(sentence);

//const sliced = sentence.slice(0,3); //pirmus  3elementus
// const sliced = sentence.slice(-3); //paskutinius 3
// console.log(sliced);

// const numbers = [7, 8, 1, 0.5, 8, 6, 10, 20, 30 ,40];

// const total = numbers.reduce((total, number) => {
//     console.log(total);
//     return total + number;
// });

// 7+8
// 15+1
// 16+0.5
// 16.5+8
// 24.5+6

//const total = numbers.reduce((total, number)=>total + nuimber, 0);

// console.log("");
// console.log(total);

// //const sortedAscendingOrder= numbers.sort((a,b)=> a-b);  //surikiuoja didejimo tvarka
// const sortedDescendingOrder = numbers.sort((a,b)=> b-a); // surikiuoja mazejimo tvarka
// //console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);

// klases darbas

// const styles = ["Jazz", "Blues"]; //2
// console.log(styles);

// styles.push("Rock-n-Roll"); //2
// console.log(styles);

// styles.splice(1,1, "Classics"); //3
// console.log(styles)

// const firstElement = styles.shift(); //4
// console.log(firstElement);
// console.log(styles);

// styles.unshift("Rap", "Reggae",); //5
// console.log(styles)

// let arr =[11, -2, 34, 45, 19, 6]

// function getMaxSubSum(array) {
// const sum = array.reduce((total, num) => (num > 0 ? total + num : total), 0);

// return sum;
// }



// function getMaxSubSum(array) {

//     const sum = array.reduce((total, num) => {
//     if (num > 0) {
//     return total + num;
//     } else {
//     return total;
//     }
//     }, 0);
    
//     return sum;
//     }

//     const sum = getMaxSubSum(arr);
//     console.log(sum);



//             NAMU DARBAI

// 1. Sort 

// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort();
// console.log(friends);

//2

// const friends = ["Jonas", "Paulius", "Antanas"];
// friends.sort();
// friends.reverse(); // arba  friends.sort((a, b) => b > a ? 1 : -1);
// console.log(friends);

// 3

// const numbers = [5, 10, 20, 11, 12, 1, 0, 14, 25];
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// 4

// const numbers = [10, 5, 20, 4];
// numbers.sort((a, b) => b - a);
// console.log(numbers[0]);


// 1 Reduce

// const favNumbs = [5, 7, 11, 15, 20];
// console.log(favNumbs.reduce((a,v) => a+v));

// 2

// const cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];
// console.log(cars.reduce((a,v) => v.length === 3 ? a + 1: a, 0));

// 3

// const num = [5, 10, 20, 4, 11, 13];
// console.log(num.reduce((a,v) => a > v ? a : v));


// 1

// const people = [
//     {
//       name: "Petras",
//       age: "18"
//     },
//     {
//       name: "Jonas",
//       age: 15
//     },
//     {
//       name: "Antanas",
//       age: 20
//     },
//     {
//       name: "Urtė",
//       age: 10
//     },
//     {
//       name: "Diana",
//       age: 25
//     },
//     {
//       name: "Ieva",
//       age: 16
//     }
//   ];


//   console.log(people.filter(x => x.age >= 18));

// 2

// console.log(people.filter(x => x.age >= 18).map(person => person.name))

// 3

// console.log(people.filter(x => x.age >= 18).map(person => person.name).sort())

// 4

const drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 }
  ]
  
  function fn(items){
    items.sort((a, b) => a.price - b.price)
    return {pigiausias: items[0].name, brangiausias: items[items.length - 1].name}
  }
  
  console.log(fn(drinks))
