{


// Conditional types

type b1 = number;
type c1 = string
type chk = b1 extends null ? true : false
type check2 = b1 extends null ? true : c1 extends undefined ? undefined : any

type checkvalue<T> = T extends "car" | "bus" | "car" ? true : false
type check<T> = checkvalue<"car">       // retrun true
type checks<T> = checkvalue<"hi">       // retrun false

type seikh = {
    car:string;
    bike:string;
}

type value1<T> =  T extends keyof seikh ? true :false
type check01 = value1<"bike">
type check02 = value1<"car">
type check03 = value1<"nai">

}