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
    
}