// class Animal {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     }
//   }
  
//   class Rabbit extends Animal {
//      constructor(name, color) {
//          super(name, color);
//         // this.name = name;
//         // this.family = "rabbits";
//         this.created = Date.now();
//     }
//   }
  
//   let rabbit = new Animal ("White Rabbit", "white");
//   let rabbit = new Rabbit ("White Rabbit", "white");
//   console.log(rabbit);


class Item{
    constructor(name, price, count){
        this.name = name;
        this. price = price;
        this. count = count;
    }

    addToList = ()=>{
        const list = document.getElementById("list");
        const newItem = document.createElement("li");
        newItem.textContent = `${this.name} x ${this.count} =$ ${this.count * this.price}`;
        list.append(newItem);
    };
}

// const itemForm = document.getElementById("form-item");

// const subimtItemForm =(event) =>{
//     event.preventDefault();
//     const itemName = document.querySelector("input [name= 'item']");
//     const price = document.querySelector("input [name= 'price']");
//     const count= document.querySelector("input [name= 'count']");
//     // console.log(item);

// const item = new Item (itemName.value,
//     Number (price.value), 
//     Number (count.value)
//     );

//     item.addToList ();
// };
// const itemForm = document.getElementById("form-item");
// itemForm.addEventListener("submit", subimtItemForm);


function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.addToTable = function(){
        const nameColumn = document.createEvent("td");
        nameColumn.textContent = this.name;
        const surnameColumn = document.createElement("td");
        surnameColumn.textContent = this.surname;
        const tr = document.createElement("tr");
        tr.append(nameColumn, surnameColumn);
        document.querySelector("table">tbody).append(tr);
    };
}

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const [name, surname] = fullname.split(' ').map(namePart => capitalize(namePart.trim()));

  const person = new Person(name, surname);
  person.addToTable();
});
