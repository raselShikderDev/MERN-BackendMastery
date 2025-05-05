{


    // Polymorphism
    // Provide same method provide diffrent output
    // in child class we can not chnage method
    // to take extra parameter through method need to assign constructor
    // must call super()

class Person {
    getSleep(){
        console.log("Get sleep for 8 hours");
    }
}

class Student extends Person {
   getSleep() {
    console.log("Get sleep for 7 hour");  
   }
}

class Developer extends Person {
   getSleep() {
    console.log("Get sleep for 6 hour");   
   }
}


const person1 = new Person()
const person2 = new Student()
const person3 = new Developer()

// Calling Method - 1
// person1.getSleep()
// person2.getSleep()
// person3.getSleep()

// Calling method - 2
const getsleepingHour = (value:Person)=>{
    value.getSleep()
}
// getsleepingHour(person1)
// getsleepingHour(person2)
// getsleepingHour(person3)






class Shape{
    getArea(){
        return 0
    }
}

class Circel extends Shape{
    radius:number

    constructor(radius:number){
       super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangale extends Shape {
    constructor(public width:number, public length:number) {
        super()
    }
    getArea(): number {
        return 2*(this.width + this.length)
    }
}


const shape1 = new Shape()
const shape2 = new Circel(20)
const shape3 = new Rectangale(4, 6)

// calling method - 01
// console.log(shape1.getArea());
// console.log(shape2.getArea());
// console.log(shape3.getArea());
  
// Calling method - 02
const getShape = (shape: Shape)=>{
     console.log(shape.getArea())
}
// getShape(shape1)
// getShape(shape2)
// getShape(shape3) 


}

{


// 🔧 Problem: Employee Bonus Calculator
// You are building a system to calculate the yearly bonus of different types of employees in a company. Each employee type has a different bonus calculation rule.

// 💼 Requirements:
// Create a base class Employee with a method getBonus(): number that returns 0 by default.
// Create subclasses:
// Manager: Gets 20% of their salary as a bonus.
// Developer: Gets 10% of their salary as a bonus.
// Intern: Gets a fixed bonus of 1000.
// Create a function printBonus(employee: Employee) that logs:
// "Bonus for [ClassName]: [bonus]"
// Test it with different types of employees.


class BonusCalculator{
    getBonus():number {
        return 0
    }
}

class Manager extends BonusCalculator{
    constructor( public salary:number){
        super()
    }

    getBonus():number {
         return (10 * this.salary) / 100
    }
}

class Developer extends BonusCalculator{
    constructor( public salary:number){
        super()
    }

    getBonus():number {
         return (20 * this.salary) / 100
    }
}

class Intern extends BonusCalculator{
    getBonus():number {
         return 1000
    }
}

const person01 = new Manager(30000)
const person02 = new Developer(30000)
const person03 = new Intern()

const printBonus = (bonus: BonusCalculator)=>{
     console.log(`Bonus for ${bonus.constructor.name}: ${bonus.getBonus()}`)
}

printBonus(person01)
printBonus(person02)
printBonus(person03)





}