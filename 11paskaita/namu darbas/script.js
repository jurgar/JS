const  car = {
doors: 4,
color: "white",
brand: "Lexus",

};
console.log(car.brand);
console.log(`${car.brand} is a new  ${car.color} car and has ${car.doors} doors `);

const driverLicence = document.getElementById("driver-licence");
driverLicence.addEventListener("submit", handleSubmitDriverLicence);
function handleSubmitDriverLicence(event){
    event.preventDefault();

const driverName = document.querySelector("input[name= 'driver-name']");
const driverAge = document.querySelector("input[name= 'driver-age']");


const name = driverName.value;
const age = Number(driverAge.value);

const licence={
    name:name,
    age: age,
    isLegalAge:age>18 ? true:false,
};
console.log(licence);

}




// document.querySelector("form").addEventListener("submit",(e) =>{
// e.preventDefault();

// const name = e.target.elements.name.value;
// const age = Number(e.target.element.age.value);
// const isLegalAge = age>=18;

// const person ={
//     name: name,
//     isLegalAge:isLegalAge,
// };
//  console.log(person);

// });
