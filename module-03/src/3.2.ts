{

        // Object Oriented Programming
    // Inheriutance


    class Person{
        name:string;
        age:number;
        address:string;

        constructor(name:string, age:number, address:string,){
            this.name = name;
            this.age = age;
            this.address = address
        }
    }


    class Student extends Person{

        constructor(name:string, age:number, address:string,){
            super(name, age, address)
        }
        getSleep(numberofSleep:number){
            return `${this.name} sleep on avarage ${numberofSleep} hours in a day`
        }
    }

    class Teacher extends Person{
        designation:string;

        constructor(name:string, age:number, address:string, designation:string,){
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numberOfClass:number){
            return `${this.designation} ${this.name}, take classes on avarage ${numberOfClass} classes in a day`
        }
    }

    // const person1:object = new Teacher("Mr. Student", 23, "Dhaka, Bangladesh", "Professor")
    // console.log(person1)






//  Problem: Inheritance in a School System
// You are building a basic school system using classes.

// Create a base class called Person with the following:
// Properties: name (string), age (number)
// A method called introduce() that logs:
// 👉 "Hi, I'm {name}, and I'm {age} years old."
// Create a class Student that inherits from Person:
// Adds a new property: grade (number)
// Overrides the introduce() method to also include the grade.
// 👉 Output: "Hi, I'm {name}, and I'm {age} years old. I'm in grade {grade}."


// Solution - Following code

class Persoon{
    constructor(public name:string, public age:number){}
    introduce(){
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old.`
    }
}


class Studeent extends Persoon{
    constructor(name:string, age:number, public grade:number){
        super(name, age)
    }

    introduce(): string {
        return `Hi, I'm ${this.name}, and I'm ${this.age} years old. I'm in grade ${this.grade}.`
    }

}

const p1 = new Persoon("Rasel", 23)
console.log(p1.introduce())

const s1 = new Studeent("RSL", 23, 12)
console.log(s1.introduce())


//

}