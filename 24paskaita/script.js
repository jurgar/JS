const fetchRandomUser = async () => {
    try {
     const response = await fetch('https://randomuser.me/api/');
        if (response.ok) {
         const data = await response.json();
         console.log(data);
        }
    } catch(error) 
        console.error(error);
    
    }
};
    
    fetchRandomUser();
    //async function random() {}
     // kitas budas 

const getRandomUser = async () => {
    try {
      const resp = await fetch('https://randomuser.me/api/');
      const response = await resp.json();
      console.log(response);
   } catch (error) {
       console.error (error);
       
    }
};

getRandomUser();
// naudojama daznazniuasia

// fetch('https://randomuser.me/api/')
//     .then ((resp )=> resp.json())
//     .then((response) => {
//         console.log(response);

//     })
//     .catch ((error) => {
//         console.error (error);
//     });