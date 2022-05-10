const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const years = document.getElementById('years').value;

  let bonus = 50;
  if (years >= 10) {
    bonus += 50;
  }
  if (years >= 20) {
    bonus += 100;
  }

  document.getElementById('output').innerText = `Jūsų premija: ${bonus}`;
})



// function isLeapYear(year) {
//     return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
//   }
  
//   function handleFormSubmit(event) {
//     event.preventDefault();
//     const year = Number(document.getElementById("year").value);
//     const outputElement = document.getElementById('output');
//     if (isLeapYear(year)) {
//       outputElement.textContent = "Metai keliamieji";
//     } else {
//       outputElement.textContent = "Metai nėra keliamieji";
//     }
//   }
  
//   document.querySelector('form').addEventListener('submit', handleFormSubmit);
  



// function convertToFarenheit(event) {
//     const celciusInputValue = event.target.value;
//     const outputElement = document.getElementById('output');
//     if (celciusInputValue) {
//       const celcius = Number(celciusInputValue);
//       const farenheit = ((celcius * 1.8) + 32).toFixed(1);
//       outputElement.innerText = farenheit;
//     } else {
//       outputElement.innerText = '';
//     }
//   }
  
//   document.getElementById('celcius').addEventListener('input', convertToFarenheit)
  

// function handleFormSubmit(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;
//     const didAgreeToGetLetter = document.getElementById('checked').checked;
//     const outputElement = document.getElementById('output');
//     outputElement.textContent = didAgreeToGetLetter ? `El. paštas ${email} sėkmingai užregistruotas` : 'Registracija nesėkminga';
//   }
  
//   document.querySelector('form').addEventListener('submit', handleFormSubmit);
  


// function handleFormSubmit(event) {
//     event.preventDefault();
//     const name = document.getElementById('name').value;
//     const numberOfElements = Number(document.getElementById('numberOfElements').value);
    
//     const list = document.getElementById('list');
//     list.innerHTML = '';
//     for (let i = 0; i < numberOfElements; i++) {
//       const listItem = document.createElement('li');
//       listItem.innerText = name;
//       list.append(listItem);
//     }
//   }
  
//   document.querySelector('form').addEventListener('submit', handleFormSubmit);



// function drawTriangle(event) {
//     event.preventDefault();
//     let triangleSize = Number(document.getElementById('triangleSize').value);
//     const outputElement = document.getElementById('output');
  
//     let output = '';
//     for (i = 0; i < triangleSize; i++) { 
//       for (j = 0; j <= i; j++) {
//         output += "*";
//       }
//       output += "<br>";
//       outputElement.innerHTML = output;
//     }
//   }
  
//   document.querySelector('form').addEventListener('submit', drawTriangle);
  