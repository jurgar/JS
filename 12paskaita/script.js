//pasikartoti masyvo struktura - lauztiniai skliaustai,[]
//ismokti sukurti elementa JavaScript faile


const array = ["Rokas","Tomas", "Karolis"];
const numbers = [1,2,3,5];
const users = [
    {name:"Rokas",age: 12},
    {name: "Tomas", age: 14},
];

const lists = [
    [1, 2, 5],
    [1, 5, 7],
    [7, 5,8 ],
]
// const divs = [<div>Rokas</div>, <div>Tomas</div>];

const fruits = document.getElementsByTagName("li");
const fruit2 = document.querySelectorAll("#fruit");
const fruitList = document.getElementById("fruits");

// console.log(fruit2);


// naujo HTML elemento sukurimas
const pineapple = document.createElement("li");
// <li> </li>
pineapple.textContent ="Pineapple";
// <li>Pinapple</li>

 const pear =document.createElement("li");
 pear.textContent ="Pear";
 pear.style.color = "green";

// fruitList.append(pineapple); //priededa i gala
// fruitList.prepend(pear);  // prideda i prieki

const extraList = document.createElement("ol");
// <ol> <ol/>
extraList.append(pineapple);
extraList.append(pear);
//extraList.append(pineapple, pear)

document.body.append(extraList);

// Automobilio aprasymas

const card = document.createElement("div");
card.style.background = "f3f3f3";
card.style.display = "flex";

const image = document.createElement("img");

image.src =

"https://s1.15min.lt/images/photos/2020/08/19/original/ferrari-f8-tributo-5f3d402aef4f7.jpg";

image.alt = "Red ferrari";

image.style.width = "40%";


const info = document.createElement("div");
info.style.paddingLeft = "24px";

const title =document.createElement("h1");
title.textContent = "Ferrari f8 tributo";

const description = document.createElement("p");
description.textContent = "Very nice car";

const benefits = document.createElement("ul");

const firstBenefit = document.createElement("li");
firstBenefit.textContent ="Color";
const secondBenefit = document.createElement("li");
secondBenefit.textContent ="Price";
const thirdBenefit = document.createElement("li");
thirdBenefit.textContent ="Speed";


// const benefitList = ["Color", "Price", "Speed", "Emotion"];
// for (let i = 0; i < benefitList.length; i++) {
// const benefitDescription = benefitList[i];
// const benefit = document.createElement("li");
// benefit.textContent = benefitDescription;
// benefits.append(benefit);
// }


benefits.append(firstBenefit, secondBenefit, thirdBenefit);
info.append(title, description, benefits);
card.append(image, info);
document.body.append(card);

