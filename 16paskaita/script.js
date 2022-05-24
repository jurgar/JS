const veggies = [
    {name: "Apple", category:"tree", price: 1},
    {name: "Pear", category:"tree", price: 2},
    {name: "Blackberries", category:"bush", price: 5},
    {name: "Bluberries", category:"bush", price: 7},
    {name: "Carrot", category:"dirt", price: 0.25},
    {name: "Potato", category:"dirt", price: 0.3},
];

// const cheapVeggies = veggies.filter((veggie) =>veggie.price <=1 );
// const expensiveVeggies = veggies.filter((veggie) => veggie.price >= 6);
// const expensiveVeggiesNames =expensiveVeggies.map((veggie) => veggie.name);

// const expensiveVeggiesNames = veggies.
//     .filter((veggie) =>veggie.price>=6)
//     .map((v) =>v.name);


// console.log(cheapVeggies);
// console.log(expensiveVeggies);
// console.log(expensiveVeggiesNames);

// const sorted =veggies.sort((a,b) => (b.name > a.name ? -1 : 1));  //nuo A-Z
// console.log(sorted);

function prices(array) {

    // {name: "", price: 0}
    
    const sorted = array.sort((a, b) => a.price - b.price);
    const cheapest = sorted[0];
    const expensive = sorted[sorted.length - 1];
    return { cheapest: cheapest.name, expensive: expensive.name };
    }
    
    const veggiesPrice = prices(veggies);
    console.log(veggiesPrice.cheapest);
    console.log(veggiesPrice.expensive);
    
