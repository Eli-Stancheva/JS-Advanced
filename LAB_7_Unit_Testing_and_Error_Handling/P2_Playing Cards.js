function playing(face, suit) {
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

    if(!suits.hasOwnProperty(suit)){
        throw new RangeError('Invalid siut' + suit);
    }


    const card = {
        face: face,
        suit: suits[suit],
        toString(){
            return this.face + this.suit;
        }
    }
    return card;
}


console.log(playing('A', 'S').toString());
console.log(playing('10', 'H').toString());
console.log(playing('1', 'C').toString());