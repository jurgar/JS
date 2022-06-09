// const networkRequest = () => {
//     setTimeout (()=> {
//         console.log("Async Code");
//     }, 4000);
// };

// console.log("Hello Word");
// networkRequest();
// console.log("The End");

// const resolvedpromise = new Promise ((resolve,reject) =>{
//     resolve("17 celsius, Vilnius");

// });
// resolvedpromise.then((response) =>{
//     console.log(`Dabar yra ${response}`);
// });

const rejectedPromise =new Promise((resolve, reject) => {
    reject("Tinklas yra perklrautas. Pabandykite veliau");
});

rejectedPromise
.then((response) => {
    console.log(`Dabar yra ${response}`);
})
.catch((error) => {
    console.error(error);
})
.finally(() => {
    console.log("Kreipimasis i oro tarnyba");
});
