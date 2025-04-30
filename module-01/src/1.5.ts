{



// Object type
const user:{
    firstname:string;
    middlename:string;
    surname:string;
} ={
    firstname:"md",
    middlename:"Rasel",
    surname:"Shikder"
}



// Optional Object type
const user2:{
    firstname:string;
    middlename?:string; // Optional type
    surname:string;
    isMarried:boolean;
} ={
    firstname:"md",
    surname:"Shikder",
    isMarried:false,
}



//  Literal Object type
const user3:{
    company:"Programming Hero"; // Literal Object type
    firstname:string;
    middlename:string;
    surname:string;
} ={
    company:"Programming Hero", // Literal Object type
    firstname:"md",
    middlename:"Rasel",
    surname:"Shikder"
}
// user3.company = "remote"



//  Read only Object type
const user4:{
    company:"Programming Hero";
    firstname:string;
    readonly middlename:string; // Readonly type
    surname:string;
} ={
    company:"Programming Hero",
    firstname:"md",
    middlename:"Rasel",
    surname:"Shikder"
}
// user4.middlename = "Rasel Shikder"



}