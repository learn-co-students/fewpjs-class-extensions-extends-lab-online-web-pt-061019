class Polygon{
    constructor(arrayOfSides){
        this.arrayOfSides = arrayOfSides
    }

    get countSides(){
        return this.arrayOfSides.length
    }

    get perimeter(){
        return this.arrayOfSides.reduce((a,b) => a + b, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.countSides === 3){
            let side1 = this.arrayOfSides[0]
            let side2 = this.arrayOfSides[1]
            let side3 = this.arrayOfSides[2]
            if ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)){
                return true
            }
            else {
                return false
            }
        }
    }
}

class Square extends Polygon{

    get isValid(){
        if(this.countSides === 4 && this.perimeter % 4 == 0){
            return true
           }
        else {
            return false
        }   
    }

    get area(){
        if (this.isValid){
            return this.arrayOfSides[0] * this.arrayOfSides[1]
        }
    }

}