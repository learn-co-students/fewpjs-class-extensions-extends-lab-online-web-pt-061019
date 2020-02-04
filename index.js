class Polygon {
    constructor(sidesArray) {
        this.sides = sidesArray;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        // let p = 0
        // for(const eachSide of this.sides){
        //     p += eachSide;
        // }
        // return p

        return this.sides.reduce((total, val) => total + val)
    }
}

// The sum of the lengths of any two sides of a triangle is greater than the length of the third side. If you take the three sides of a triangle and add them in pairs, the sum is greater than (not equal to) the third side. If that is not true, then it is not possible to construct a triangle with the given side lengths.

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            // for(const eachSide of this.sides) {
                 let a = this.sides[0]
                 let b = this.sides[1]
                 let c = this.sides[2]
                 let calculateSide = !((a + b < c) || (a + c < b) || (b + c < a))
                return calculateSide
         } else {
                  return false
              }
            // }
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
            // for(const eachSide of this.sides) {
                 let a = this.sides[0]
                 let b = this.sides[1]
                 let c = this.sides[2]
                 let d = this.sides[3]
                 let checkSide = (a === b) && (a === c) && (a === d)
                return checkSide
         } else {
                return false
              }


        // if (this.countSides === 4) {
        //     for(const eachSide of this.sides) {
        //         if (eachSide === eachSide) {
        //             return true
        //         } else {
        //             return false
        //         }
        //     } 
            
        // } 
    }
}