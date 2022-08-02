function lowestPrices(array) {
    let object = {};

    for (let i = 0; i < array.length; i++) {
        let productInfo = array[i].split(" | ");
        let town = productInfo[0];
        let product = productInfo[1];
        let price = Number(productInfo[2]);

        if (!object.hasOwnProperty(product)) {
            object[product] = { town, price };
        } else {
            if(price < object[product].price){
                object[product] = { town, price };
            }
        }
    }

   for (const key in object) {
       console.log(`${key} -> ${object[key].price} (${object[key].town})`);
   }
}

lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);