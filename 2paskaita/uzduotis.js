let legalAge = 20;
let clientAge = 20;

if(clientAge < legalAge){
    console.log('child')
}
else{
    console.log('adult')
}

let vardas = 'name123';

if(vardas.length >= 6) {
    console.log('ilgas vardas')
}
else{
    console.log('trumpas vardas')
}

let myAge = 99;

if(myAge <= 0) {
    console.log('invalid age');
}
else if(myAge <= 18) {
    console.log('child');
}
else if(myAge <= 99){
    console.log('adult');
}

const car = 'Bugatti';

if(car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce'){
    console.log('BMW');
}
else if(car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car ==='Porsche'){
    console.log('VW');
}