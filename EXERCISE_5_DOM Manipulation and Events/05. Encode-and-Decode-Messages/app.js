function encodeAndDecodeMessages() {
    let textAreas = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event) {
        let encodeMess = '';
        let input = textAreas[0].value;

        for (let i = 0; i < input.length; i++) {
            encodeMess += String.fromCharCode(input[i].charCodeAt(0) + 1)
        }

        textAreas[1].value = encodeMess;
        textAreas[0].value = '';
    }

    function decode(event) {
        let decodeMess = '';
        let input = textAreas[1].value;

        for (let i = 0; i < input.length; i++) {
            decodeMess += String.fromCharCode(input[i].charCodeAt(0) - 1)
        }

        textAreas[1].value = decodeMess;
    }
}