const url = "https://magnetic-melon-yam.glitch.me";
fetch(url)


getRandomUser();


const createUserRow () =(user) =>{
    const id =user.id;
    const name = user.name;
    const city = user.city;
    const email = user.email;

    const tdId = document.createElement("td");
    const tdName = document.createElement("td");  
    const tdCity= document.createElement("td");
    const tdFavColor= document.createElement("td");
    
    tdId.textContent = user.id;
    tdName.textContent = user.name;
    tdCity.textContent = user.city;
    tdFavColor.textContent = user.fav_color;

    const trUser = document.createElement("tr"); 
    trUser.append (tdId, tdName, tdCity, tdFavColor);

    return trUser;
}

const renderTable =(users) => {
    const thId = document.createElement("th");
    const thCity = document.createElement("th");
    const thName = document.createElement("th");
    const thColor = document.createElement("th");

    thId.textContent = "id";
    thCity.textContent = "city";
    thName.textContent = "name";
    thColor.textContent = "fav_color";

    const thRow =document.createElement("tr");
    const thead =document.createElement("thead");
    const table =document.createElement("table");
    


}


fetch("https://magnetic-melon-yam.glitch.me")
     .then((resp )=>resp.json())
     .then((response) => {
        //atvaizduoti pirmo elemento duomenis
        console.log(response);
    })
    .catch((error) => {
        console.error(error, ": Failed to load users" );
      });

      
      
      
