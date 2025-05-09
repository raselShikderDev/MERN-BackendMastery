{
  // Task 1: Basic Data Types and First Program
  // Objective: Write a TypeScript program that outputs a welcome message.

  const gretting = (data: string): null => {
    console.log(data);
    return null;
  };
  const data: string = `Hello World, I will complete this course successfully and become a Next level Web Developer!`;
  // gretting(data);

  //   Task 2: Functions, Optional, and Literal Types
  //   Objective: Create a function with parameters and an optional literal type.

  type Role = "admin" | "user" | "guest";
  interface res {
    name: string;
    age: number;
    role: Role;
  }

  const newFunc = (
    name: string,
    age: number,
    role: Role
  ): { name: string; age: number; role: Role } => {
    return {
      name: name,
      age: age,
      role: role,
    };
  };

  // Task 3: Object Types, Type Alias, & Literal Types
  // Objective: Define a structured Person object using Type Aliases.

  type TPerson = {
    Name: string;
    Address: string;
    HairAndEyeColor: string;
    IncomeAndExpense: number;
    Hobbies: string;
    FamilyMembers: [];
    Job: string;
    Skills: [];
    MaritalStatus: string;
    Friends: number;
  };
}

// Task 4: Union and Intersection Types
// Objective: Create union and intersection types using interfaces.

interface IBook {
  readingTime: number;
  pauseTime: number;
}
interface IMagazine {
  readingTime: string;
  pauseTime: string;
}

type TUnion = IBook | IMagazine;
type TIntersection = IBook & IMagazine;

// Task 5: Function Type
// Objective: Write a function that reverses a string.

const reverseString = (input: string): string => {
  const arr = input.split("").reverse().join("");
  return arr;
};
// console.log(reverseString("rasel"));

// Task 6: Spread and Rest Operators, Destructuring
// Objective: Write a function that uses the rest operator for variable-length arguments.

const sum = (...numbers: number[]): number => {
  return numbers.reduce((prev, curr) => (prev += curr));
};
// console.log(sum(4, 5, 6));

// Task 7: Type Assertion and Narrowing
// Objective: Write a function that behaves differently based on the input type.

type parameter = string | number;
const varsetileFunc = (input: parameter): number => {
  if (typeof input === "number") {
    return input * input;
  } else {
    return input.length;
  }
};
// console.log(varsetileFunc("Rasel"));
// console.log(varsetileFunc(5));

// Task 8: Intersection Types
// Objective: Practice using intersection types.

interface IUser {
  name: string;
  email: string;
}

interface IAdmin {
  adminLevel: string;
}

type AdminUser = IUser & IAdmin;
function describeAdmin(user: AdminUser): string {
  return `The name of ${user.adminLevel} is ${user.name} with email ${user.email}`;
}
// console.log(describeAdmin({name:"Rasel", email:"rasel@mail.me", adminLevel:"CEO"}));

// Task 9: Optional Chaining
// Objective: Use optional chaining with nested objects.

function getEmployeeCity(employee: any) {
  return employee?.profile?.info?.personal?.location?.city;
}
const user = {
  profile: {
    info: {
      personal: {
        name: "Rafi",
        location: {
          country: "Bangladesh",
          city: "Dhaka",
        },
      },
    },
  },
};
// console.log(getEmployeeCity(user));



// Task 10: Nullish Coalescing
// Objective: Handle null and undefined values using nullish coalescing.

function getDisplayName(name: string | null | undefined): string{
  return name ?? "Anonymous"
}
// console.log(getDisplayName());




// Task 11: Unknown Type
// Objective: Handle different types with the unknown type.

function processData(data: unknown): number | string {
  if (typeof data === "number") {
    return data * data;
  } else if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    throw new Error("Invalid Input");
  }
}
// console.log(processData("rasel"));




// Task 12: Never Type
// Objective: Use the never type for functions that don’t return.

// Instructions:
// Write a function handleError that:
// Accepts a message: string.
// Throws an error with the given message.
// Use the never return type to indicate that this function never returns.

const handleError =(value:string):never=>{
  throw new Error(`Did not macth with ${value}`);
}
// console.log(handleError("somthing"));
