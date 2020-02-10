// Your code here

class Polygon {
  constructor(sidesArr) {
    this.sidesArr = sidesArr
  }

  get countSides() {
    return this.sidesArr.length
  }

  get perimeter() {
    return this.sidesArr.reduce((memo, i) => memo + i)
  }
}

class Triangle extends Polygon {
  get isValid() {
    if(this.countSides === 3) {
      let [a, b, c] = this.sidesArr
      if ((a + b > c) && (a + c > b) && (b + c > a)) {
        return true
      }
      else { return false }
    }
  }
}

class Square extends Polygon {
  get isValid() {
    let [side, , , ] = this.sidesArr

    if (this.sidesArr.every(i => i === side)) {
      return true
    }
    else { return false }
  }

  get area() {
    return this.sidesArr[0]**2
  }
}