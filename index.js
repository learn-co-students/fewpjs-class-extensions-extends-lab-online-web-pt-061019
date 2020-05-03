// Your code here1. 

class Polygon {
    constructor(sides){
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let perimeterNum = 0
        for(let i = 0; i < this.sides.length; i++){
          perimeterNum += this.sides[i]
        }
        return perimeterNum
    }
}
// Define a `Polygon` class. `Polygon` will accept an `Array` of integers as a
// parameter, which will represent each _side_ of a shape. 
// * Use the `get` keyword to make a getter method `countSides` that counts the number of sides (each index in the array).
// * Use the `get` keyword to make a getter method `perimeter` that calculates the sum of each side (each index in the array) of the polygon.
//  This method will become accessible to its child classes.

// 2. Define a `Triangle` class that inherits from `Polygon`.
// * It will automatically have access to `count` and `perimeter` inherited from `Polygon`.
// * Use the `get` keyword to make a getter method `isValid` that checks if the given 3 sides for a triangle is valid.

// > The sum of the lengths of any two sides of a triangle is greater than the length of
// the third side. If you take the three sides of a triangle and add them in pairs, the sum
// is greater than (not equal to) the third side. If that is not true, then it is not possible
// to construct a triangle with the given side lengths.

// 3. Define a `Square` class that inherits from `Polygon`.
// * It will automatically have access to `count` and `perimeter` inherited from `Polygon`. 
// * Use the `get` keyword to make a getter method `isValid` that checks if the given 4 sides for a square is
// valid. A square is valid when the lengths of all sides are equal. 
// * Use the `get` keyword to make a getter method `area` that calculates the area of the square.

