// GET metodas- gauna esamus irasus
// POST metodas - sukuria nauja irasa
// PUT - modifikuoja esanti irasa
// DELETE - istrina esama irasa

const url = "https://jsonplaceholder.typicode.com/comments";
fetch(url)
//arba 

fetch("https://jsonplaceholder.typicode.com/comments")
     .then((resp )=>resp.json())
     .then((response) => {
        //atvaizduoti pirmo elemento duomenis
        console.log(response);
    })
    .catch((error) => {
        console.error(error, ": Failed to load comments" );
      });


 fetch("https://jsonplaceholder.typicode.com/users")    
    .then(resp =>resp.json())
    .then(response => {
        // atvaizduoti pirmo objekto adress,company ir name. Juos sudeti i atskirus kintamuosius
    console.log("users:", response);
 })
    .catch ((error)=> {
     console.error(error, ": Failed to load users" );
 });


 fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((resp) => resp.json())
    .then((response) => {
// atvaizduoti userio name, username, email ir city ekrane
// optional: ideti random nuotrauka i img taga
    console.log("user: ", response);
})
    .catch((error) => {
    console.error(error, ": Failed to load user");
});