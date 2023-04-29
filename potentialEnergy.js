function potentialEnergy(mass, height){
    let energy = mass * 9.8 * height;
    return energy;
}

console.log(potentialEnergy(10,10));