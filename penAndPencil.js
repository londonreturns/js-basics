function penCopyPencil(pen, pen_price, copy, copy_price, pencil, pencil_price){
    var total = pen * pen_price + copy * copy_price + pencil * pencil_price;
    return total
}

console.log(penCopyPencil(1, 2, 3, 4, 5, 6))