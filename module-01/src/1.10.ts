{



// Union Type - |
type Student = "Topper" | "Failuer"
// const rasel:Student = "Topper"
// const rasel:Student = "backbencher"

type reactDeveloper = "GOOD DEVELOER" | "BELLOW AVARAGE DEVELOPER"
type nextDeveloper = "FANTASTIC DEVELOPER" | "BEST DEVELOPER"
type mixDeveloper = reactDeveloper | nextDeveloper
// const developer1:mixDeveloper = "BELLOW AVARAGE DEVELOPER"
// const developer2:mixDeveloper = "AVARAGE DEVELOPER"

const userInfo:{
    name:string;
    age:number;
    gender:"male" | "female";
    bloodgroup: "A+" | "B+" | "AB+" | "O+";
} = {
    name:"RAsel",
    age:23,
    gender:"male",
    bloodgroup:"B+",
}



// Intersection type
// type Stu = "BACKBENCHER" | "GOOD STUDENT";
// const rasel:Stu[] = ["BACKBENCHER", "GOOD STUDENT"]

type sub1 ={
    subject:string[];
    status: "pass";
}

type sub2 ={
    subject:string[];
    betterGrade: string[];
}

type subjectList = sub1 & sub2          // Intersection type

const Rasel:subjectList={
    subject:["ENGLISH", "MATH"],
    status:"pass",
    betterGrade:["ACCOUNTING", "FINANCE"]
}





}