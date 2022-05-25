// 1.
//parasykite funkcija, kuri priims minutes(number) ir grazins valandas(string: "x hours")
//pvz: fn(30)=>"0.5 hour"

const arrowMinutesToHour = (minutes) =>{
    const hours = minutes / 60;
    return `${hours} hours`;

}
console.log(arrowMinutesToHour(30));

//2.
//parasyti funkcija, kuri priims metus ir grazins kiek metu jis jau nugyveno(amzius=10metu)
//pvz:fn(23) =>"2.3 amzius"

const yearsToAge = (years) => years /10;

console.log(yearsToAge(23));

//3. 
//parasyti arrow funkcija(viena eilute), kuriai padavus skaiciu - ji grazintu pakelta kubu.
//pvz:fn(5)=>125

const cube = (number)=>number *number *number;
console.log(cube(5));

//4.
//Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų kvadratoplotą. 
//Pvz: fn(10, 10) -> 100.

const squareArea = (x, y)=>(x * y);
console.log(squareArea(10, 10));

//5.
//Parašykite funkciją, kuri paims parametrą String, ir grąžins to parametro pirmąraidę, bet didžiąją.
//Pvz. Paduodu: "dogas", grąžina "D".

const reverseString = (string)=>{
    const upperCased = string.toUpperCase();
    const stringLength = upperCased.charAt(string.lenght -1)

    return stringLength;

};

console.log(reverseString("dogas"));

//6.
//Sukurkite funkciją, kuri paims stringą ir grąžins jį be pirmosios raidėsir pakelta pirmąją
//T.y. "Petras" -> "Etras"

const reverseString1 = (string)=>{
    const sliced = string.slice(1, 6);
    const upperCased = sliced.charAt(0).toUpperCase() + sliced.slice(1);

    return upperCased;

};
console.log(reverseString1("Petras"));

//1.
//Pasakykite skaičių kiek žmonių vardų prasideda “A” raide tarp šių duomenų (t.y. console'log skaičių).


// blogai ,blogai
// const peopleNames = ["Antanas", "Austėja", "Arnas", "Augustas"];

// const peopleCount =(array) =>{
//     const persons = array.filter(person==="A");
//     return persons.lenght;

// }
// console.log(peopleCount(peopleNames));
    


