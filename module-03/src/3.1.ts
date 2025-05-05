{

    // Object Oriented Programming 
// Class

class Animal{
    constructor(public name:string, public species:string, public sound:string){}
    makeSound(){                // creating method using anynomus function
        console.log(`${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Doggy", "Somthing", "GHEW GHEW")

console.log(dog)





// Problem - solving the undefined ouytput
// Solution - THe constractar initialization was wrong, there was no this keyword to initialize.

class Car {
    brand:string;
    model:string;
    year:number;

    constructor(brand:string, model:string, year:number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

const myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();





// Problem Statement:
// You need to create a class called Rectangle that has the following:

// Properties:
// width (number)
// height (number)

// Constructor:
// The class should accept width and height as parameters and initialize them.
// Methods:
// getArea(): A method that returns the area of the rectangle (width * height).
// getPerimeter(): A method that returns the perimeter of the rectangle (2 * (width + height)).
// displayDetails(): A method that displays the width, height, area, and perimeter of the rectangle.

// Solution - Following code

class Rectangle{
    constructor(public width:number, public height:number){}
    getArea(){
        return this.width * this.height
    }
    getPerimeter(){
        return 2 * (this.width + this.height)
    }
    displayDetails(){
        console.log(`Width:${this.width}, Height:${this.height}, Area:${this.getArea()}, Perimeter:${this.getPerimeter()}`)
    }
}
const myRectangle = new Rectangle(10, 5);
myRectangle.displayDetails();











}