class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = [];

        for (const el of vegetables) {
            let [type, quantity, price] = el.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let existingVeg = this.availableProducts.find(v => v.type == type);

            if (existingVeg) {
                existingVeg.quantity += quantity;
                if (existingVeg.price < price) {
                    existingVeg.price = price;
                }
            } else {
                this.availableProducts.push({ type, quantity, price });
                result.push(type);
            }
        }
        return `Successfully added ${result.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        for (const el of selectedProducts) {
            let [type, quantity] = el.split(' ');
            quantity = Number(quantity);

            let existingVeg = this.availableProducts.find(v => v.type == type);

            if (!existingVeg) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else if (quantity > existingVeg.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            } else {
                let price = existingVeg.price * quantity;
                existingVeg.quantity -= quantity;
                totalPrice += price;
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {
        quantity = Number(quantity);

        let existingVeg = this.availableProducts.find(v => v.type == type);

        if (!existingVeg) {
            throw new Error(`${type} is not available in the store.`);
        } else if (quantity > existingVeg.quantity) {
            existingVeg.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        } else {
            existingVeg.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`;
        }
    }

    revision() {
        let result = [];

        result.push("Available vegetables:");

        let sorted = this.availableProducts.sort((a, b) => a.price - b.price);

        sorted.forEach(e => {
            result.push(`${e.type}-${e.quantity}-$${e.price}`);
        })

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



