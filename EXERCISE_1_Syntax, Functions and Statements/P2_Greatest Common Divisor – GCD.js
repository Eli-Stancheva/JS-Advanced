function gcd(num1, num2){
    if(num2){
        return gcd(num2, num1 % num2);
    } else {
        console.log(num1);
    }
}

gcd(15, 5);
gcd(2154, 458);