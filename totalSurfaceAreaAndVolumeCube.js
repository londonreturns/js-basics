function totalSurfaceAreaAndVolumeCube(length){
    let area = 6 * length * length;
    let volume = length * length * length;
    return area + ' ' + volume;
}

console.log(totalSurfaceAreaAndVolumeCube(2));