// Your code here

class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((total, val) => total + val)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
                 let a = this.sides[0]
                 let b = this.sides[1]
                 let c = this.sides[2]
                 let calculateSide = !((a + b < c) || (a + c < b) || (b + c < a))
                return calculateSide
         } else {
                  return false
              }
        }
}

class Square extends Polygon {
    get area() {
        for(const eachSide of this.sides) {
            return eachSide ** 2
        }
    }

    get isValid() {
        if (this.countSides === 4) {
                 let a = this.sides[0]
                 let b = this.sides[1]
                 let c = this.sides[2]
                 let d = this.sides[3]
                 let checkSide = (a === b) && (a === c) && (a === d)
                return checkSide
         } else {
                return false
              }
    }
}