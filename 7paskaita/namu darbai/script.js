// document.querySelector("form").addEventListener("submit", myfunction);

// function myfunction(event){
//     event.preventDefault();
//     const result = document.querySelector("input[name=myName]").value;

//     document.querySelector.textContent = result;
//     console.log(result);

// }

// function myfunction(event){
//     event.preventDefault();
//     const result = document.querySelector("input[name=myAge]").value;

//     document.querySelector("h1").textContent = result;
//     console.log(result);

// }


const ageInput = document.getElementById("age");
const form = document.querySelector("form");
const priceDisplay = document.getElementById("price");

function handleFormSubmit(event) {
  event.preventDefault()
  const price = 6;
  const age = Number(ageInput.value);

  if (age >= 60) {
    priceDisplay.textContent = (0.5 * price).toFixed(2);
  } else if (age < 18) {
    priceDisplay.textContent = (0.45 * price).toFixed(2);
  } else {
    priceDisplay.textContent = price.toFixed(2);
  }
}

form.addEventListener("submit", handleFormSubmit);


const ageInput = document.getElementById("age");
const tInput = document.querySelector("input[type=checkbox]");
const form = document.querySelector("form");
const result = document.getElementById("result");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const age = Number(ageInput.value);
  const isConvicted = tInput.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    result.textContent = "Army's calling you";
  } else {
    result.textContent = "No army for you";
  }
}