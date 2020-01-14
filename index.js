// Your code here
class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  get countSides() {
    return this.sidesArray.length;
  }

  get perimeter() {
    return this.sidesArray.reduce((acc, cur) => {
      return acc + cur;
    });
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides !== 3) return false;
    let [sideA, sideB, sideC] = this.sidesArray;
    return (
      sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA
    );
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides !== 4) return false;
    let [sideA, sideB, sideC, sideD] = this.sidesArray;
    return sideA === sideB && sideA === sideC && sideA === sideD;
  }

  get area() {
    if (this.isValid) {
      return this.sidesArray[0] * this.sidesArray[1];
    }
  }
}
