{
  // Name type alias (Of an object)
  const student1: {
    fName: string;
    lName: string;
    age: number;
    isRich: boolean;
  } = {
    fName: "Stu1",
    lName: "No las nm 1",
    age: 50,
    isRich: false,
  };

  const student2: {
    fName: string;
    lName: string;
    age: number;
    balance: number;
    isRich: boolean;
  } = {
    fName: "Stu2",
    lName: "No las nm 2",
    age: 30,
    balance: 0,
    isRich: true,
  };

  const student3: {
    fName: string;
    lName: string;
    age: number;
    isRich: boolean;
    role: string;
  } = {
    fName: "Stu3",
    lName: "No las nm 3",
    age: 43,
    isRich: false,
    role: "Coder",
  };

  type Student = {
    // Type alias
    fName: string;
    lName: string;
    age: number;
    balance?: number;
    isRich: boolean;
    role?: string;
  };

  const student01: Student = {
    fName: "Stu1",
    lName: "No las nm 01",
    age: 50,
    isRich: false,
  };

  const student02: Student = {
    fName: "Stu02",
    lName: "No las nm 02",
    age: 30,
    balance: 0,
    isRich: true,
  };

  const student03: Student = {
    fName: "Stu03",
    lName: "No las nm 03",
    age: 43,
    isRich: false,
    role: "Coder",
  };

  // Functions type alias
  const add = (num1: number, num2: number): number => {
    return num1 + num2;
  };

  type Subs = (num1: number, num2: number) => number;       // Type alias

  const substract:Subs = (num1, num2) => {
    return num1 - num2;
  };
  substract(4, 3)
}
