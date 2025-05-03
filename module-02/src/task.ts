{
  // Task 1: Basic Data Types and First Program
  // Objective: Write a TypeScript program that outputs a welcome message.

  const gretting = (data:string):null => {
    console.log(data);
    return null;
  };
  const data: string = `Hello World, I will complete this course successfully and become a Next level Web Developer!`;
  gretting(data)



//   Task 2: Functions, Optional, and Literal Types
//   Objective: Create a function with parameters and an optional literal type.

type Role = "admin" | "user" | "guest"
interface res {
    name:string, age:number, role:Role
}

const newFunc = (name:string, age:number, role:Role):{name:string, age:number, role:Role}=>{
    return {
        name:name,
        age:age,
        role:role,
    }
}



















}


