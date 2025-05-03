{


// Utility type
type Person = {
    name:string;
    age:number;
    devType?:"string";
    isRich?:boolean;
    salary:number;
}

// Pick - picking selected item from a type and create a new type
type personOne = Pick<Person, "name" | "age" | "devType">

// Omit - create new type excluding selcted item 
type personTwo = Omit<Person, "salary" | "isRich">

// Required - Creates new type with all items and optional items get required item
type personThree = Required<Person>

// Partial - convert all items into optional items
type personFour = Partial<Person>

// readonly - makes all item readonly item (no one can be edited)
type personFive = Readonly<Person>
const user1:personFive ={
    name:"RSL",
    age:23,
    salary:34,
}

// Record - it only allow to add new item when predefined type match with new type
type PersonSix = Record<string, string>
const personSix:PersonSix = {
    name:"Rasel",        // Okay
    // age:67,             // Error
    // isMarred:true,      // Error
    devType:"Mern",     // Okay
}

type PersonZeroSix = Record<string, unknown>
const myObj:PersonZeroSix ={
    name:"hi",
    age:87,
}



}