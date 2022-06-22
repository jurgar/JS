// const myButton = document.getElementById("my-button");
// myButton.addEventKListener ("click", (event))=>{

//});

// arba taip galima rasyti:

//function handleClick (event){}
// myButton.addEventListener("click", handlerClick);
//console.log("Presed button!");

// arba:

// let count = 0;

// myButton.addEventListener("click", (event) => {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// });

// function handleClick(event) {
//   count++;
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;

//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");

//   if (count === 5) {
//     resultEl.textContent = "You just hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
// }

// myButton.addEventListener("click", handleClick);

// // uzduotis

// // sukurti mygtuka  html faile su tekstu "Show my name" ir tuscia paragrafo elementa.
// // nuspaudus mygtuka turi ismesti jusu varda su jusu megstamiausia spalva

// const showNameButton = document.querySelector("#show-name");

// showNameButton.addEventListener("click", () => {
//   const nameEl = document.querySelector("#name");
//   nameEl.textContent = "Rokas";
//   nameEl.style.color = "red";
// });

// uzduotis

// 1.sukurti html faile 2 mygtukus "+"" ir "-" simboliais, h2 elementa
// kuriame bus vaizduojamas skaicius. Nuspaudus + prideda , paspaudus - atima viena.

// pamodifikuoti paskutine užduoti. Pakeisti mygtukus i +500 ir -500 .
// Nuspaudus ant ju skiacius turi padideti 500 arba sumažėti 500. prideti papildoma mygtuka Reset, kuris nustato reiksme į 0.

//1.
// let numberCount = 0;

// const plusButton = document.getElementById("plus");
// plusButton.addEventListener("click", () => {
//   numberCount++;
//   document.getElementById("result-number").textContent = numberCount;
// });

// const minusButton = document.getElementById("minus");
// minusButton.addEventListener("click", () => {
//   numberCount--;
//   document.getElementById("result-number").textContent = numberCount;
// });

// //2.
// let number500Count = 0;

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => {
//   number500Count += 500;
//   document.getElementById("result500-number").textContent = number500Count;
// });
// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => {
//   number500Count -= 500;
//   document.getElementById("result500-number").textContent = number500Count;
// });

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => {
//   number500Count = 0;
//   document.getElementById("reset500-number").textContent = number500Count;
// });

// //issitraukti Forma

// const registerForm = document.getElementById("register");

// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const username = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");

//   const result = document.createElement("h2");
//   result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;

//   document.body.append(result);
// });

// uzduotis

//sukurti forma su 3 laukais kuriuose reikia irasyti varda, pavarde ir metus.
//nuspaudus mygtuka submit turi atsirasti tekstas pagal kriterijus:
// jeigu metai daugiau nei 18- pilnametis;
// jeigu metai maziau nei 18- nepilnametis.

const registrationForm = document.getElementById("register");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const surname = document.querySelector("input[name='surname']");
  const age = document.querySelector("input[name='age']");
  const resultAge = document.createElement("h2");

  if (age.value < 18) {
    resultAge.textContent = `${username.value} ${surname.value} is child`;
  } else {
    resultAge.textContent = `${username.value} ${surname.value} is adult`;
  }
  document.body.append(resultAge);
});
