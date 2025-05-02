
{



    // Interface
    interface User {
        name:string;
        age:number;
        company?:string;
    }

    const user:User = {
        name:"Rasel",
        age:23,
    }
console.log(user);
type user1 = {
    name:string;
    age:number;
    company:string;
}

interface User01 {
    name:string;
    age:number;
    company?:string;
}
type wholeUser1 = User01 & {role:string}
const user001:wholeUser1 = {
    name:"Rasel",
    age:23,
    company:"own",
    role:"ceo",
}
console.log(user001);


// make interface using tyepe
type newUser = {
    id:number;
    name:string;
    isVerified:boolean;
}

interface oldUser extends newUser {
    profile:string;
    balance:number;
}

const guestUser:oldUser = {
    id:89,
    name:"rasel",
    isVerified:true,
    profile:"none",
    balance:0
}
console.log(guestUser);

interface roll {
    [index:number]:number
}

const class1:roll = [6, 8, 8]


}