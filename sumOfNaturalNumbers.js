function sumOfNaturalNumbers(number){
    let sum = 0
    for (var i = 1; i <= number; i++){
        sum += i;
    }
    return sum
}

console.log(sumOfNaturalNumbers(5));