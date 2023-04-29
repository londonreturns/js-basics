function calculateDistance(velocity, time, acceleration){
    let distance = velocity * time + 0.5 * acceleration * time * time;
    return distance;
}

console.log(calculateDistance(2, 3, 5));