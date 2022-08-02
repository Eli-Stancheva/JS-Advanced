function deckOfCards(cards) {
    let result = [];

    for (let cardAsStr of cards) {
        let face = cardAsStr.slice(0, -1);
        let suit = cardAsStr.slice(-1);

        try {
            let card = createCard(face, suit);
            result.push(card);
        } catch (error) {
            result = ['Invalid card: ' + cardAsStr];
        }
    }

    console.log(result.join(' '));

    function createCard(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (!faces.includes(face)) {
            throw new RangeError('Invalid face' + face);
        }

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (suits[suit] == undefined) {
            throw new RangeError('Invalid siut' + suit);
        }


        const card = {
            face: face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
        return card;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);

