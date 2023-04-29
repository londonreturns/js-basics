function areaOfTriangle(a, b, c){
    let semi = (a + b + c) / 2;
    let area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c))
    return area;
}

console.log(areaOfTriangle(3,4,5));