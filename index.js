class Polygon {
    constructor(intArray) {
        this.intArray = intArray
    }

    get countSides() {
        return this.intArray.length
    }

    get perimeter() {
        return this.intArray.reduce((accumulator, integer) => accumulator + integer, 0)
    }
}

class Triangle extends Polygon{
    get isValid() {
        const a = this.intArray[0]
        const b = this.intArray[1]
        const c = this.intArray[2]

        const ab = a + b
        const ac = a + c
        const bc = b + c

        if (ab < c || ac < b || bc < a) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get area() {
        const side = this.intArray[0]
        return Math.pow(side, 2)
    }

    get isValid() {
        const sideOne = this.intArray[0]
        const same = this.intArray.find(side => side != sideOne)

        return !same ? true : false
    }
}