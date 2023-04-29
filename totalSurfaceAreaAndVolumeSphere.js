function totalSurfaceAreAndVolumeSphere(radius){
    let volume = 4 / 3 * Math.PI * Math.pow(radius,3)
    let area = 4 * Math.PI * Math.pow(radius,2)
    return area + ' ' + volume
}

console.log(totalSurfaceAreAndVolumeSphere(2));