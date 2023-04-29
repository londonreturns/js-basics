function interestAndAmount(principle, time, rate){
    let interest = principle * time * rate;
    let amount = principle + interest;
    return interest + ' ' + amount;
}

console.log(interestAndAmount(100, 2, 2));