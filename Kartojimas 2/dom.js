// console.log("Dom fails");

// document.getElementById("id"); // vienaskaita grazina {}

// document.getElementsByClassName("klase"); // daugiskaita grazina []

// document.getElementsByName("name"); // daugiskaita grazina []

// document.getElementsByTagName("div"); // daugiskaita grazina []

// document.getElementById("pirmas"); // p

// const items = document.getElementsByClassName("item"); // [p , p]

// // items[0];

// // items[items.length - 1];

// document.getElementsByName("mano-input"); // []

// document.getElementsByTagName("p");

// document.querySelector("div"); // vienaskaita grazina pagal elementa {}

// document.querySelector(".card"); // vienaskaita grazina pagal klase {}

// document.querySelector("#price"); // vienaskaita grazina pagal id {}

// document.querySelector(".card div"); // vienaskaita

// const allParagraphs = document.querySelectorAll("p"); // daugiskaita []
// const first = allParagraphs[0];
// const last = allParagraphs[allParagraphs.length - 1];
// first.style.background = "red";
// const help = document.getElementById("help");
// help.textContent = "Rokas yra geras zmogus";
// help.style.background = "red";

// uzduotis

// html faile sukurti tuscia h2 elementa ir su JS pagalba jam priskirti teksta su savo vardu.
//taip pat pakeisti sifro spalva i zalia.

// const nameEl = document.getElementsByName("name");
// nameEl.textContent = "Jurga";
// nameEl.style.color = "green"

// const name = "Jurga";
// const h2 = document.createElement("h2");
// h2.textContent = name;
// document.body.append(h2);

// uzduotis

// pakeitis html failo fono spalva i #4267b2
// sukurti dar viena h2 elementa html, su JS pagalba priskirti jam teksta "Laba diena, geros dienos"
// bei iscentruoti per viduri ekrano.

// const body = document.querySelector("body");
// body.style.backgroundColor = "#4267B2";
// document.body.style.background = "#4267B2";

// const greetingEl = document.getElementById("greeting");
// greetingEl.textContent = "Labadiena, geros dienos!";
// greetingEl.style.textAlign = "center";

// greetingEl.style.display = "flex";

// greetingEl.style.justifyContent = "center";

// greetingEl.style.alignItems = "center";

// greetingEl.style.height = "80vh";

// const div = document.createElement("div");
// div.textContent = "mano naujas divas";
// document.body.append(div); //istumia i gala kaip vaikini elementa
// document.body.prepend(div); // istumia i prieki kaip vaikini elementa

// const square = document.getElementById("box");
// square.style.display = "flex";
// square.style.backgroundColor = "black";
// square.style.height = "100px";
// square.style.width = "100px";

// nelabai tinkamas variantas

// const square1 = document.getElementById("box1");
// square1.style.display = "flex";
// square1.style.backgroundColor = "yellow";
// square1.style.height = "50px";
// square1.style.width = "50px";

// const square2 = document.getElementById("box2");
// square2.style.display = "flex";
// square2.style.backgroundColor = "green";
// square2.style.height = "100px";
// square2.style.width = "100px";

// const square3 = document.getElementById("box3");
// square3.style.display = "flex";
// square3.style.backgroundColor = "red";
// square3.style.height = "150px";
// square3.style.width = "150px";

// uzduotis

// su JS sukurti juoda kvadrata, kurio matmenys butu 100*100 ir ji prideti i html

const blackCube = document.createElement("div");

blackCube.style.backgroundColor = "black";
blackCube.style.height = "100px";
blackCube.style.width = "100px";

document.body.append(blackCube);

// uzduotis
// Tik su JS sukurti 3 kvadratus kuriu matmenys 50*50, 100*100, 150*150.
// spalvos - geltona, zalia, raudona. Prideti juos i html faila

const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");

cardOne.style.backgroundColor = "yellow";
cardOne.style.height = "50px";
cardOne.style.width = "50px";

cardTwo.style.backgroundColor = "green";
cardTwo.style.height = "100px";
cardTwo.style.width = "100px";

cardThree.style.backgroundColor = "red";
cardThree.style.height = "150px";
cardThree.style.width = "150px";

document.body.prepend(cardOne, cardTwo, cardThree);

//uzduotis

// sukurti masyva fruits su rieksmemis- banana, apple, pear. su JS pagalba sukurti unordered lista
//ir prideti i ji vaisius.

// sukurti ul
// daryti cikla
// sukurti elementa
// prideti i ul
// po ciklo append i body

const fruits = ["banana", "apple", "pear"];
const list = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  list.append(listItem);
}

document.body.append(list);
