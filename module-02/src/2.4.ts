{



// generic with interface
interface Developer<dynamic, dynamic2 = null>{
    name:string;
    role:string;
    device:{
        desktop:string;
        laptop:string | null;
    };
    smartwatch: dynamic;
    bike:dynamic2;
}

const poorDeveloper:Developer<{brand:string; numberOfFeature:number; isLongDurability:boolean} > ={
    name:"someone",
    role:"frontend",
    device:{
        desktop:"HP",
        laptop:null,
    },
    smartwatch:{
        brand:"hibijibi",
        numberOfFeature:5,
        isLongDurability:true,
    },
    bike:null,
}

const richDeveloper:Developer<{brand:string; numberOfFeature:number; isLongDurability:boolean}, {brand:string; feature:number;} > ={
    name:"someone",
    role:"frontend",
    device:{
        desktop:"HP",
        laptop:null,
    },
    smartwatch:{
        brand:"apple",
        numberOfFeature:10,
        isLongDurability:true,
    },
    bike:{
        brand:"Royel Enflied",
        feature:6,
    },
}
console.log(poorDeveloper);
console.log(richDeveloper);


}