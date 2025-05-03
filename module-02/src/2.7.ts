{
    //


    // Constrant using key of 
    type vehcile ={
        bus:string;
        car:string;
        bike:string;
    }
    // following both method works same 
    type owner = "bike" | "Car" | "bus"
    type owner2 = keyof vehcile


    const user = {
        name:"rasel",
        age: 23,
        hasBike:false,
    }
    const getuser = <X, Y extends keyof X> (obj:X, key:Y)=>{        // constrant using key
        return obj[key]
    }
    const res1 = getuser(user, "name") // okay
    // const res2 = getuser(user, "nai")       // wrong - not match with key


    //
}