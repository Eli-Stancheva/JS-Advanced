function dayOfWeek(day){
    let resultDay;

    switch(day){
        case "Monday":
        resultDay = 1;
        break;
        case "Tuesday":
        resultDay = 2;
        break;
        case "Wednesday":
        resultDay = 3;
        break;
        case "Thursday":
        resultDay = 4;
        break;
        case "Friday":
        resultDay = 5;
        break;
        case "Saturday":
        resultDay = 6;
        break;
        case "Sunday":
        resultDay = 7;
        break;
        default:
        resultDay = "error";
        break;
    }

    console,console.log(resultDay);
}

dayOfWeek("Monday");