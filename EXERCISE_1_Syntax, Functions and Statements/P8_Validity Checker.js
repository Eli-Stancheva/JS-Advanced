function checker(x1, y1, x2, y2){
    let distanceCheck;

    function checkDistance(pointX1, pointY1, pointX2, pointY2){
        return Math.sqrt(Math.pow((pointX2 - pointX1), 2) + Math.pow((pointY2 - pointY1), 2));
    }

    distanceCheck = checkDistance(x1, y1, 0, 0);
    if (Number.isInteger(distanceCheck)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    distanceCheck = checkDistance(x2, y2, 0, 0);
    if (Number.isInteger(distanceCheck)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    distanceCheck = checkDistance(x1, y1, x2, y2);
    if (Number.isInteger(distanceCheck)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

checker(3, 0, 0, 4);
checker(2, 1, 1, 1);