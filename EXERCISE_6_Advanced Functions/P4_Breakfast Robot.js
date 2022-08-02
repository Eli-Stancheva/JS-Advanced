function solution() {
    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },

        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },

        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },

        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },

        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock,
        prepare,
        report
    }

    return manager;
    function manager(line) {
        const [command, recipe, qty] = line.split(' ');
        return commands[command](recipe, qty);
    }

    function restock(microelement, quantity) {
        stock[microelement] += Number(quantity);
        return "Success";
    }

    function prepare(recipeAsStr, quantity) {
        quantity = Number(quantity);
        const recipe = Object.entries(recipes[recipeAsStr]);

        //calculate tatal ingredient quantity
        recipe.forEach(i => i[1] *= quantity);

        for (let [ingr, qnt] of recipe) {
            if (stock[ingr] < qnt) {
                return `Error: not enough ${ingr} in stock`;
            }
        }

        recipe.forEach(([ingr, qnt]) => stock[ingr] -= qnt);
        return "Success";
    }

    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`;
    }
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log(manager("report")); 
