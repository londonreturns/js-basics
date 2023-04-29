function areaAndPerimeterRectangle(length, breadth){
    let area = length * breadth;
    let perimeter = 2 * (length + breadth);
    return area + ' ' + perimeter;
}

console.log(areaAndPerimeterRectangle(2, 5));