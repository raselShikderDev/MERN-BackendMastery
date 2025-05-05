{


// Instance of operator

// Creating class of Animal 
class Animal{
    constructor(public name:string, public species:string){}
    makeSound(){
        console.log("I am making sound")
    }
}

// Creating class of Dogs
class Dog extends Animal{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeBark(){
        console.log("I am making Bark")
    }
}

// Creating class of Cat
class Cat extends Animal{
    constructor(name:string, species:string){
        super(name, species)
    }
    makeMeaw(){
        console.log("I am making Meaw")
    }
}

// Creating instance
const animals = new Animal("animal bolchi", "animal")
const dogs = new Dog("Dogs bolchi", "Dogs")
const cats = new Cat("Dogs bolchi", "Cats")


// method -2 of handling gurd (smartly handled)
// cheching type and getting a boolen value as output
const getdogs = (animal:Animal):animal is Dog=>{
    return animal instanceof Dog
}

const getcats = (animal:Animal):animal is Cat=>{
    return animal instanceof Cat
}

const getAnimals02 = (animal:Animal)=>{
    if(getdogs(animal)){            
        animal.makeBark()
    }else if(getcats(animal)){
        animal.makeMeaw()
    } else {
        animal.makeSound()
    }
}
    // console.log("following are from 02")
    // getAnimals02(dogs)
    
// method -1 of handling gurd
const getAnimals01 = (animal:Animal)=>{
    if(animal instanceof Dog){
        animal.makeBark()
    }else if(animal instanceof Cat){
        animal.makeMeaw()
    } else {
        animal.makeSound()
    }
    
}
// console.log("following are from 01")
// getAnimals01(dogs)






// Problem: instanceof Type Checking
// You are building a small object system to represent users in a company.

// Create a base class User with a property name.
// Create two classes that extend User:
// Admin: with an extra property adminLevel (number)
// Employee: with an extra property department (string)
// Create a function printUserInfo(user: User) that:
// Prints "Admin: {name}, Level: {adminLevel}" if the user is an Admin
// Prints "Employee: {name}, Department: {department}" if the user is an Employee
// Prints "Unknown user type: {name}" otherwise
// Use the instanceof operator to check the type of the object.

//creating User which is parent
class User{
    constructor(public name:string){}
    printUserInfo(){
        console.log(`User: ${this.name}`)
    }
}

// creating adminLevel class
class Admin extends User{
    constructor(name:string, public adminLevel:string){
        super(name)
    }
    printAdminInfo(){
        console.log(`Admin: ${this.name}, Level: ${this.adminLevel}`)
    }
}

// creating adminLevel class
class Employee extends User{
    constructor(name:string, public department:string){
        super(name)
    }
    printEmplyoeeInfo(){
        console.log(`Employee: ${this.name}, Deparment: ${this.department}`)
    }
}

// Creating Instace off all
const mainUser = new User("Rasel Shikder")
const adminUser = new Admin("adminUser", "Higher")
const employeeUser = new Employee("employeeUser", "Marketing")

// Getting boolean value by cheking type using instaceof gurd
const getAdmininUser = (person:User):person is Admin =>{
    return person instanceof Admin
}

const getEmployeeUser = (person:User):person is Employee =>{
    return person instanceof Employee
}

// Printing the output
const getPersons =(person:User)=>{
    if (getAdmininUser(person)) {
        person.printAdminInfo()
    } else if(getEmployeeUser(person)) {
        person.printEmplyoeeInfo()
    } else {
        person.printUserInfo()
    }
}

getPersons(adminUser)
getPersons(employeeUser)


//
}