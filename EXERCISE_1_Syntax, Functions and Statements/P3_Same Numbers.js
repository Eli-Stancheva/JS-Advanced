function sameNums(number) {
    let input = String(number);
    let sum = 0;
    let isSame = true;
    let firstDigit = input[0];

    for (let i = 0; i < input.length; i++) {
        let currDigit = +input[i];
        sum += currDigit;

        if (firstDigit != currDigit) {
            isSame = false;
        } 
    }

    console.log(isSame);
    console.log(sum);
}

sameNums(2222222);
sameNums(1234);