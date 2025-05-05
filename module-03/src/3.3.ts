{

// Type Gurd & In Gurd checking


// type gurd  - typeof
type anything = string | number
const calculate = (param1:anything, param2:anything):anything=>{
    if(typeof param1 === "number" && typeof param2 === "number"){
        return param1 + param2
    } else{
        return param1.toString() + param2.toString()
    }
}
console.log(calculate("45", 56))
console.log(calculate("45", "ami"))
console.log(calculate(45, 56))



// type gurd -  in gurd type








// ❓ Problem: Type Guard for Union Types
// You're writing a function to handle two types of data: string messages and numeric error codes.

// Create a function called handleInput(input: string | number) that behaves as follows:
// If the input is a string, log:
// 👉 "Message received: {input}"
// If the input is a number, log:
// 👉 "Error code: {input}"
// Use a custom type guard function (not just typeof directly inside handleInput) to determine the type of input.

// 🎯 Requirements:
// 1. Define a custom type guard function:
// 2. Use this type guard inside handleInput() to decide how to process the input.

// 3. Test with multiple values like:
// handleInput("Server started");
// handleInput(404);

// ✅ Example Output:
// Message received: Server started
// Error code: 404






}