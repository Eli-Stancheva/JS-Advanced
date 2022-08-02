function fruit(typeFruit, weight, pricePerKilogram){
    let weightInKilo = weight / 1000;
    let price = pricePerKilogram * weightInKilo;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${typeFruit}.`);
}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);