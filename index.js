// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  // Refactor this to use reduce
  get perimeter() {

    let perimeter = 0

    this.sides.forEach((side, i) => {
      perimeter += side
    });

    return perimeter
  }
}

class Triangle extends Polygon {

  // The sum of the lengths of any two sides of a triangle is greater than the length of the third side.
  // If you take the three sides of a triangle and add them in pairs, the sum is greater
  // than (not equal to) the third side. If that is not true,
  // then it is not possible to construct a triangle with the given side lengths.

  get isValid() {

    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]

    if (this.count == 3) {
      // triangle

      if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[0] + this.sides[2] > this.sides[1] && this.sides[1] + this.sides[2] > this.sides[0]) {
        return true
      } else {
        return false
      }


    } else {
      return false
    }


  }
}

class Square extends Polygon {

  get isValid() {
    if (this.count == 4) {

      if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2] && this.sides[0] == this.sides[3]) {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}
