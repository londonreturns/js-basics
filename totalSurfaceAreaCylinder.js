function totalSurfaceAreaCylinder(radius, height){
    let area = Math.PI * 2 * radius * (radius + height);
    return area;
}

console.log(totalSurfaceAreaCylinder(2, 5));