// function random(min, max) {

//     const num = Math.floor(Math.random() * (max - min + 1)) + min;
    
//     return num;
    
//     }

//     console.log("5paskaita.DOM manipuliavimas");

const nameNode = document.getElementById("name");
nameNode.textContent = "Rokas";

const descriptionText = "Man patinka programuoti";
const descriptionNode = document.getElementById("description");
descriptionNode.textContext = descriptionText;


document.body.style.backgroundColor = "f1f1f1";
document.body.style.margin = 0;
nameNode.style.color = "blue";
descriptionNode.style.paddingLeft= "10px";
descriptionNode.style. padding ="10px";
descriptionNode.style.backgroundColor = "cyan";

// const discountNode = document.querySelector("li");
// console.log(discountNode);

// const LiByTg = document.querySelector("li");
// const LiById = document.querySelector("#discount");
// const LiByClass = document.querySelector(".yellow");

// const firstItem = document.querySelector("li:first-child");
// const lastItems = document.querySelector("li:last-child");
// console.log(firstItem);


// const discountedItems = document.querySelectorAll("#discount");
// console.log(discountedItems[0]);
// console.log(discountedItems.lenght);