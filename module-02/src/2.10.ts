{


// Mapped typed
const numbers:number[] = [1, 22, 3]
const strings:string[] = numbers.map((num)=>num.toString())
// console.log(numbers, strings);

type areaNumber = {
    height:number;
    width:number;
}

type heighttoeCheck = areaNumber["height"]          // Look up Type

// type areaString = {
//     height:string;
//     width:string;
// }

type arrayTypeConvert<T> ={             // converting type using index signature and used generic to make more flexible
    [key in keyof T]:T[key]
}


const arr:arrayTypeConvert<{height:number; width:number;}> ={height:4, width:5}

console.log(arr);



}