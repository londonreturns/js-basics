function passOrFail(mark1, mark2, mark3, mark4){
    let sum = (mark1 + mark2 + mark3 + mark4) / 4;
    let is_pass =   (sum < 40) ? false: true
    return is_pass
}

console.log(passOrFail(1, 2, 3, 4));