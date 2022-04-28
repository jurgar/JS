//!!! patikrinti rasybos klaidas
// Patikrinti ar failas yra ikeltas i tinkama folderi
// 1. patikrinti ar esu tinkamam folderyje - komanda ls (c:/Users/salta/JS/2paskaita)
// 2. patikrinti ar issaugojau failus-baltas taskas prie failo pavadinimo
// 3. patikrinti ar irasiau console.log()
// 4. patikrtinti ar tinkamai paleidau faila  "node script.js"
// 5. patikrinti terminalo ismetama zinute

// "cd 1paskaita"- eina i kita folderi.
// "cd" .."-grizta atgal per viena folderi
// "ls" - isveda visus folderio failus

// console.log("Sveiki, cia antra paskaita");

// const money = 100.5;
// const price = 105.5;
// const currency = "$";
 
// if (money > price) {
//     const change = money-price;
//    console.log("Tu nusipirkai daikta.Tavo graza: " + currency +  change ); // A
// } else if (money === price) {
//  console.log("Tu nusipirkai daikta, tau nebeliko pinigu :)"); // B
// } else {
//     const startLabel = "Tau neuzteko pinigu daiktui nusipirkti.Tau truksa: ";
//     const missingMoney = price-money;
//     console.log(startLabel + currency +  missingMoney); // C
// }


const runner = "Kendyll";
const position = 2;
let medal = "pat on the back";



if (position === 1) {
medal = "gold";
} else if (position === 2) {
medal = "silver";
} else if (position === 3) {
medal = "bronze";
}
console.log(runner + " received a " + medal + " medal.");



const number = 2;
if (number % 2 == 0) {
// even - lyginis
console.log(number + " skaicius yra lyginis");
} else {
// odd - nelyginis

console.log(number + " skaicius yra nelyginis");
}

const peopleCount = 3;

if(peopleCount <= 0 ){
    console.log('ne grupe');
} else if(peopleCount ==1){
    console.log('solo');
} else if(peopleCount == 2){
    console.log('duetas');
} else if(peopleCount == 3){
    console.log('trio');
} else if(peopleCount == 4){
    console.log('kvartetas');
} else if(peopleCount > 4){
    console.log('didele grupe')

}

let people = -1
let groupName = "Didele grupe"

if (people <= 0) 
{groupName = "Ne grupe";
}
else if (people === 1)
 {groupName = "Solo";
}
else if ( people === 2) 
{groupName = "Duetas";
}
else if ( people === 3) 
{groupName = "Trio";
}
else if ( people === 4) {
groupName = "Kvartetas";
}

console.log( groupName)
