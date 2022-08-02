function solve(descriptions, sortWay) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];
    for (const place of descriptions) {
        let [destination, price, status] = place.split('|');
        price = Number(price);
        
        let currrTicket = new Ticket(destination, price, status);
        result.push(currrTicket);
    }

    result.sort((a, b) => {
        if (sortWay === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortWay === 'price') {
            return a.price - b.price;
        } else if (sortWay === 'status') {
            return a.status.localeCompare(b.status);
        }
    });

    return result;
}

console.log(solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'));