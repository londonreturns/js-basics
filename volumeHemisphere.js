function volumeHemisphere(radius){
    let volume = (2 / 3) * Math.PI * Math.pow(radius, 3);
    return volume
}

console.log(volumeHemisphere(2));