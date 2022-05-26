// 6.

//     const removeFirst = (value) => {
//     const withoutFirst = value.slice(1);
//     return withoutFirst[0].toUpperCase() + withoutFirst.slice(1).toLowerCase();
    
//     };
//     const removed = removeFirst("GRIDAS");

// // 1. Pasakykite skaičių kiek žmonių vardų prasideda “A” raide tarp šių duomenų (t.y. console'log skaičių).

//     const startsA = (array) => array.filter((p) => p.first_name[0] === "A").length;

//     console.log(startsA(data))


// 2. Pasakykite skaičių kiek žmonių varde turi raidę “K” tarp šių duomenų (t.y. console'log skaičių).


    // const hasK = (array) => array.filter((p) => p.first_name.includes("K")).length;
    // console.log(hasK(data));


    //objektinis programavinmas

    //susikurkitee objektu konstruktoriu naudojant new pavadinimu Book, kuris gales kurti objektus,
    //kurie tures sias savybes(properties) :name, author, year ir metodus(naudojant prototype)
    //kuriu vienas parasys pavadinima ir autoriu, o kitas parodys knygos amziu(senuma)

    // Konstrutoriaus funkcija rasoma is Didziosios raides

// function Book(name, author, year){
//     this.name = name;
//     this.authorName = author;
//     this.year = year;
//     this.getInfo = ()=>{
//         return `${this.name} parase ${this.authorName}`;

//     };
//     this.getYears = () =>{
//         const today = new Date();
//         return today.getFullYear() - this.year;
//     };
// };

// const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997);
// const randomBook = new Book("Random Writer", "J.K.", 2022);

// console.log(harryPotterBook);
// console.log(harryPotterBook.name);

// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());
// console.log(randomBook.getInfo());

// const book ={
//     name:"HP",
//     authorName: "JK",
//     year: 1997,
// };

// const year = (year) =>new Date().getFullYear() -year;


// klases:

class Book {
    constructor(name, author, year) {
        this.name = name;
        this.authorName = author;
        this.year = year;
    }
        getInfo = () => {
        return `${this.name} parase ${this.authorName} knyga`;
        };

        getYears = () => {
        const today = new Date();
        return today.getFullYear() - this.year;
        };
    };

    class Employee{
    constructor(position, wage, experience){
        this.position = position,
        this. wage = wage,
        this. experience = experience;
    }

    getBonus = () =>{
        if(this.experience <5){
            return this.wage;
        } else if (this.experience <10 ){
            return this.wage *2;
        } else {
        return this.wage *3;
        }
    };
    
    }
    const softwareDeveloper = new Employee("Front-end engineer", "4000", "2");
    // console.log(softwareDeveloper);
    const salesManager = new Employee("Sales Manager", 6000, 7);
    // console.log(salesManager);
    // console.log(salesManager.experience);
    console.log(softwareDeveloper.getBonus());
    console.log(salesManager.getBonus());
