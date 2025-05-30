// ✅ Problem 1: Basic Types

// string
let username = "Rasel";
// number
let age = 23;
// boolean
let isOnline = true;



// ✅ Problem 2: Typed Function
// Write a function add that takes two numbers and returns their sum.

function add(a: number, b: number): number {
  return a + b
}



// ✅ Problem 3: User Object with Type Alias
// Create a type User and a variable user using it.

type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};

const user: User = {
  id:6453,
  name:"rasel",
  isAdmin:true,
};



// ✅ Problem 4: Array of Strings + Function
// Declare a list of fruits and print each one:

const fruits: string[] = ["apple", "banana", "mango"];

function printFruits(fruits: string[]): void {
 fruits.map((fruit)=> console.log(fruit))
}

printFruits(fruits)

