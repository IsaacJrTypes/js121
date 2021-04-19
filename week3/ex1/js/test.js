function area(height, width) {
    return height * width;
}

var area1 = area(3,4);

console.log(area1);

//anonomymus function needs to be predefined to call without name
var area2 = function(width,height) {
    returnd width * height;
}

var size = area(3,4)

