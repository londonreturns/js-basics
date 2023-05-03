function decimalToOctal(number) {
    let temp_octal = '';
    let quotient, remainder= 0;
    while (number > 0){
        quotient = Math.floor(number / 8);
        remainder = number % 8;
        number = quotient;
        temp_octal = String(remainder) + temp_octal;
    }
    return temp_octal;
}

console.log(decimalToOctal(7));