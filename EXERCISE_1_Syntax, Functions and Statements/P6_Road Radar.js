function radar(speed, area) {
    let result = "";
    let speedLimit = 0;
    let diff = 0;
    let status = "";

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    if (speed <= speedLimit && speed > 0) {
        result = `Driving ${speed} km/h in a ${speedLimit} zone`;
    } else {
        diff = speed - speedLimit;

        if (diff <= 20){
            status = "speeding";
        } else if (diff > 20 && diff <= 40){
            status = "excessive speeding";
        } else {
            status = "reckless driving";
        }

        result = `The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`;
    }

    console.log(result);
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');