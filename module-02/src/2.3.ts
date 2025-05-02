{



// Generic Type
const grades:number[] = [34, 56, 23, 67]
const grades01:Array<number> = [34, 56, 23, 67]

const names:string[] = ["rasel", "raiyan", "rifat", "hridoy"]
const names01:Array<string> = ["rasel", "raiyan", "rifat", "hridoy"]

const isPassed:boolean[] = [true, false, true, false]
const isPassed01:Array<boolean> = [true, false, true, false]


type GenericArray<params> = Array<params> 

const booleans:GenericArray<boolean> = [true, false, true]
const strings:GenericArray<string> = ["rasel", "shikder"]
const numbers:GenericArray<number> = [6, 7, 4, 8]

const obj:GenericArray<{name:string, age:number,}> = [
    {
        name:"rasel",
        age:45
    },
    {
        name:"rs",
        age:454    
    },
    {
        name:"rasel",
        age:45
    }
]

type GenericTouple<x, y> = [x, y]

const manush:GenericTouple<string, string> = ["mr. x", "mr. y"]
const datas:GenericTouple<number, {name:string}> = [5, {name:"rasel"}]

// Using type alias defining generic
type objgeneric ={
    name:string;
    age:number;
    isMember:boolean
}
const manush2:GenericTouple<number, objgeneric> = [2, {name:"rasel", age:23, isMember:true}]

}