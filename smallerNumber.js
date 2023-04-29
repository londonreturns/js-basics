function smallerNumber(num1, num2){
    let mini =  (num1 < num2 ) ? num1:
                (num2 < num1 ) ? num2:
                num1
    return mini
}

console.log(smallerNumber(-1,-1));