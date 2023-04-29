function sumOfSquareOfNaturalNumbers(number){
    let sum = 0
    for (var i = 1; i <= number; i++){
        sum += Math.pow(i, 2);
    }
    return sum
}

console.log(sumOfSquareOfNaturalNumbers(5));