{


// Nullable type
const search = (value:string | null)=>{
    if (value) {
        console.log("Searching");
    } else {
        console.log("There is nothing to search");
    }
}
// search(null)
// search("yess")



// Unknown Type 
const getSpeed = (value:unknown)=>{
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000)/3600
        console.log(convertedSpeed);
    } else if (typeof value === "string") {
        const [res, unit] = value.split(" ")
        const convertedSpeed = (parseFloat(res) * 1000)/3600
        console.log(convertedSpeed);
    } else{
        console.log("Wrong Input")
    }
}
// getSpeed("1000 kmh^1")
// getSpeed(true)
}