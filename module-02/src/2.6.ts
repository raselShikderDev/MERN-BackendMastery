{
    //
        // constrant with generic

    const makeObj = <T extends {id:number; name:string; hasAccess:boolean;}>(params:T)=>{           //constrant
        const grret:string = "Welcome to Next level Web Development"
        return{
            grret,
            ...params
        }
    }
    // const res1 = makeObj<{name:string; age:number; hasAccess:boolean}>({name:"rasel", age:23, hasAccess:true,})  // wrong
    const res2 = makeObj<{id:number; name:string;  hasAccess:boolean}>({id:23, name:"rasel", hasAccess:true,})  // right
console.log(res2)

    //
}