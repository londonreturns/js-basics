function totalSurfaceAreaCuboid(length, breadth, height){
    let area = 2 * (length * breadth +
                    breadth * height +
                    height * length)
    return area;
}

console.log(totalSurfaceAreaCuboid(1,2,3));