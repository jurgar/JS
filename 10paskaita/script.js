//objekto savybe (property)yra (string, number, array, object ir t.) melyna spalva
//objekto metodai(method) yra  funkcijos atitikmuo.Reikai i6kviesti ir paduoti parametrus(nebūtinai) getElementById

//index.html yra dokumentas

const nameInput =document.getElementById("name");

console.log(nameInput.textContent);
console.log(nameInput.innerText);
console.log(nameInput.innerHTML);

//nameInput.innerHTML = "<ul><li> Ha ha ha </li></ul>";

nameInput.addEventListener("click", handleClickOnName);

//background-color:red
//backgroundColor=red


function handleClickOnName() {
    nameInput.style.color="red";
    nameInput.style.background = "blue";
    nameInput.style.textAlign = "right";
    nameInput.style.fontSize = "72px";

}



const jumpButton =document.getElementById("jump");

jumpButton.addEventListener("click", handleJump);
jumpButton.style.cssText ="POSITION:ABSOLUTE;TOP:30PX;RIGHT:30PX;";

    let inTop = true;

function handleJump() {
    if (inTop){
    //going to bottom
        jumpButton.style.cssText ="POSITION:ABSOLUTE;BOTTOM:30PX;LEFT:30PX;";
        
        jumpButton.textContent ="Jump to top";
        inTop = false;
    }else{
        //going back to top
        jumpButton.style.cssText ="POSITION:ABSOLUTE;TOP:30PX;RIGHT:30PX;";
        jumpButton.textContent ="Jump to bottom";
        inTop=true;
    }
   // inTop =!inTop;
}


const backwardsButton = document.getElementById("backwards");
backwardsButton.addEventListener("click", handleGoBackWards);

let position =0;
    const topLeft ="position:absolute; top: 10px; left:10px";//pradine reiksme- is 3 i 0
    const topRight ="position:absolute; top: 10px; right:10px"; // is 0 i 1
    const bottomRight ="position:absolute; bottom: 10px; right:10px"; // is 1 i 2
    const bottomLeft ="position:absolute; bottom: 10px; left:10px";  // is 2 i 3

backwardsButton.style.cssText =topLeft;

function handleGoBackWards() {
    if(position ===0){
        backwardsButton.style.cssText = bottomLeft;

    }else if(position ===1){
        backwardsButton.style.cssText =bottomRight;
    } else if(position ===2){
        backwardsButton.style.cssText =topRight;
    } else{
        backwardsButton.style.cssText =topLeft;
        position =-1;
    }

    position++;
    console.log(position);

}
document.getElementById('myName').addEventListener('input', event => {
    const name = event.target.value;
    document.body.style.backgroundColor = name.length < 3 ? 'red' : 'green';
  });




  const buttonColors = ["red", "green", "blue", "yellow"]
  document.querySelector('button').addEventListener('click', event => {
    const randomIndex = Math.round(Math.random() * 4);
    event.target.style.backgroundColor = buttonColors[randomIndex];
  });
  




  function generateRandomColor() {
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    return `rgb(${r},${g},${b})`;
  }
  
  document.querySelector('button').addEventListener('click', event => {
    event.target.style.backgroundColor = generateRandomColor();
  });
  