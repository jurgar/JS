const car ="BMW"

switch(car){
    case "VW":
    case "Audi":
    case "Bentley":
    case "Bugatti":
    case"Lamborghini":
    case "Porche":
    console.log("VW Group");
    break;

    case "BMW":
    case "Mini":
    case "Rolls-Royce":
    console.log("BMW Group");
    break;
} 
 
const userInput = 'Obuolys';

switch(userInput){
    case 'Obuolys':
    case 'Bananas':
    case 'Kriause':
    case 'Slyva':
    case 'Tresne':
    console.log('Vaisius');
    break;

    case 'Pomidoras':
    case 'Agurkas':
    case 'Morka':
    case 'Bulve':
    case 'Kopustas':
    console.log('Darzove');
    break;
    default:
        console.log("Nei darzove, nei vaisius");
}


const weekDay = "4";

switch(weekDay){
    case "0":
    console.log("Pirmadienis");
    break;
    case "1":
    console.log("Antradienis");
    break;
    case "2":
    console.log("Treciadienis");
    break;
    case "3":
    console.log("Ketvirtadienis");
    break;
    case "4":
    console.log("Penktadienis");
    break;
    case "5":
    console.log("Sestadienis");
    break;
    case "6":
    console.log("Sekmadienis");
    break;
}


const myName = "Jurga";

const nameLength = myName.length <=5 ? "Short name" : "Long Name";
console.log(nameLength);



// const clientAge = 15;
// const legalAge = 18;
// clientAge >= legalAge ? console.log("Can drive") : console.log("Can't drive");


const clientAge = "15";
const legalAge = "18";


const Drive = clientAge < 0 || clientAge > 120 ? "Invalid Age" : clientAge >= legalAge ? "Can Drive" : "Can't drive";
console.log(Drive);


const phone = 'iPhone';

const isIphoneUser = phone === 'iPhone';

console.log(phone);


for(let i = 0; i < 10; i++){
    console.log(myName);
}