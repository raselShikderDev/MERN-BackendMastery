{
//


// Funcion with generics
const createFunc = (value:string):string[]=>{
    return [value]
}
console.log(createFunc("ami"))


const  createGenericFunction = <T>(params: T):T[]=>{
    return [params]
}
const strvl = createGenericFunction<string>("string value")
const boolean1 = createGenericFunction<boolean>(true)
const nmbrVl = createGenericFunction<number>(56)
const obj11 = createGenericFunction<{name:string; age:number;}>({name:"Rasel", age:23}) // Good Practice
const obj01 = createGenericFunction<object>({name:"Rasel", age:23}) // bad Practice


const genfunctype =<T, Q> (params1:T, params2: Q):[T, Q]=>{
    return [params1, params2]
}
const res1 = genfunctype<string, number>("Rasel", 45)
const res2 = genfunctype<{isAdult:boolean}, number>({isAdult:true}, 20)
const res3 = genfunctype<string[], null>(["Rasel"], null)


const getgenfun = <T>(params:T)=>{
    const greet:string = "Hello! "
    return {
        greet,
        ...params,
    }
}

const ress = getgenfun<{name:string; age:number; isMarried:boolean;}>({name:"Rasel", age:23, isMarried:true})


//
}