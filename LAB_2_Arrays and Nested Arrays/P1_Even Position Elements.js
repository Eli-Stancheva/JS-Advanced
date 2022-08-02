function findOddIndex(inputArray) {
    let numArr = [];
    

    for (let i = 0; i < inputArray.length; i = i + 2) {
        numArr[numArr.length] = inputArray[i];
    }

    console.log(numArr.join(" "));
}

findOddIndex(['20', '30', '40', '50', '60']);