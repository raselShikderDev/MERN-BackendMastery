{



// Normal function
function add(num1:number, num2:number):number{
    return num1 + num2
}
// add(1, 2)
// add(1, "2")



// Arrow Function
const substract = (num3:number, num4:number):number => num3 - num4;
// substract(4, 3)
// substract(4, "3")



// Object method
const userBalance = {
    name:"Rase",
    balance:0,
    addBalance(balance:number):number{                  // Anynomus Function
        return this.balance + balance
    }
}

const grades:number[] =[34, 56, 67, 23, 43];
const checkedGrades:number[] = grades.map((num:number) => num * num)




}