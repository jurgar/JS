const testString ="Rokas !@#$%^ Tomas 123";

//ats: "Rokas !!@@##$$%%^^ Tomas 112233"

const isLetter = (char) =>char.toLowerCase() !== char.toUpperCase();

// const newTest = testString
// .split("")
// .map((char) => (isLetter(char) ? char : char + char))
// .join("");

// console.log(newTest);

//be tarpu :
// const newTest = testString
// .split("")
// .map((char) => (isLetter(char) || char ===" " ? char: char + char))
// .join("");

// console.log(newTest);

const cookie = {
    timeSpent : "2h",
    loggedIn : "2022/06/01T18:00:00",
    theme: "dark",
};
document.cookie ="timeSpent=2h";
document.cookie ="loggedIn=2022/06/01T18:00:00";
document.cookie ="theme=dark";

// localStorage.setItem("name", "Jurga");
// localStorage.setItem("surname", "Ragauskiene");


const result = document.getElementById("full-name");
const fullName =localStorage.getItem("fullName");
result.textContent = fullName;

const button =document.getElementById("save");

button.addEventListener("click", () =>{
    const name = document.querySelector("input[name='name']");
    const surname = document.querySelector("input[name='surname']");
    
    const fullName =`${name.value} ${surname.value}`;
    const result = document.getElementById("full-name");
    result.textContent = fullName;
    
    localStorage.setItem("fullName", fullName);
});

const profileInfo = {
    firstName: "John";
    lastName: "Snow";
    picture: "https://tele1.com.tr/wp-content/uploads/2019/05/john-snow.jpg",
    description:
    "Jon Snow is a fictional character in the A Song of Ice and Fire series of fantasy novels by American author George R. R. Martin, and its television adaptation Game of Thrones, in which he is portrayed by English actor Kit Harington. In the novels, he is a prominent point of view character."

};

// set to local storage stringified value
const stringified = JSON.stringify(profileInfo)
localStorage.setItem("profile",stringified);

//parse stringified value from local storage
localStorage.getItem("profile");
const parsed = JSON.parse(stringified);

console.log(profileInfo);
console.log(JSON.stringify(profileInfo));
JSON.parse()