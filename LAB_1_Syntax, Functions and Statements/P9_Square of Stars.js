function starSquare(input){
    if (typeof(input) === "undefined"){
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                process.stdout.write("* ");
            }
            console.log();
        }
    } else {
        for(let i = 0; i < input; i++){
            for(let j = 0; j < input; j++){
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}

starSquare();