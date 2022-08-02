function smallestTwo(array){
    array.sort((a, b) => a - b);

    let result = "";
    
    for (let i = 0; i < 2; i++) {
       result += array[i] + " ";
    }

    console.log(result);
}

smallestTwo([30, 15, 50, 5]);
smallestTwo([3, 0, 10, 4, 7, 3]);