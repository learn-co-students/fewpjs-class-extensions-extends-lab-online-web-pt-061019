// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((memo, side) => memo + side);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3 && this.array[0] + this.array[1] > this.array[2] && this.array[1] + this.array[2] > this.array[0] && this.array[2] + this.array[0] > this.array[1]) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && this.perimeter % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.array[0] * this.array[1];
    }
}

let polygon = new Polygon( [ 5, 5, 5 ] )

let triangle = new Triangle( [ 5, 5, 5 ] )
let triangle2 = new Triangle( [ 15, 10, 1 ] )
triangle.countSides
triangle2.isValid