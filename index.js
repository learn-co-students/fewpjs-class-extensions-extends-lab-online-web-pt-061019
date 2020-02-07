// Your code here
class Polygon {
    constructor(sides){
        this.sides = sides;
    }

    get countSides(){
        return this.sides.length;
    }

    get perimeter(){
        return this.sides.reduce((allSides, side) => allSides + side);
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides === 3){
            let a, b, c;
            [a, b, c] = [this.sides[0], this.sides[1], this.sides[2]]
            let isTriangle = !((a + b < c) || (a + c < b) || (b + c < a))
                return isTriangle;
        } else {
            return false;
        }
    }
}

class Square extends Polygon{
    get area(){
        for(const side of this.sides){
            return side ** 2;
        }
    }

    get isValid(){
        if (this.countSides === 4){
            let a, b, c, d;
            [a, b, c, d] = [this.sides[0], this.sides[1], this.sides[2], this.sides[3]]
            let isSquare = (a === b) && (b === c) && (a === d)
            return isSquare;
        } else {
            return false;
        }
    }
}