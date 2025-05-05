{

    // Getter & Setter 

    // Getter - by using set Modifire it can be assign it works as method but can be call as proper to read property value
    // Setter - By using get Modifier it can be initialed, it also work as method but can be editable as like calling property and it does not chnage the value insted of chnage it modify the value

    
  // Initialing a class call BankAccount
  class BankAccount {
    constructor(
      readonly id: number,
      readonly name: string,
      private balance: number
    ) {}

    public addDeposit(amount:number){
        return this.balance + amount
    }

    public getBalance(amount:number){
        return this.balance
    }

    get Balance(){              // using get modifier can be crate a method that get method as property
        return this.balance;
    }

    set Deposit(amount:number){       // using get modifier, it crates a method that do not overwrite property value, modify new value insted of chnage value
        this.balance = this.balance + amount
    }

  }

  
//   const user1 = new BankAccount(23, "Rasel", 3009)
//   console.log( `Initial Balance: ${user1.Balance}`);
//   user1.Deposit = 5000
//   console.log(`Balance after adding: ${user1.Balance}`);








//   Problem: User Age Validation with Getters and Setters
//   You are designing a class User in TypeScript. Each user has a private age property that should follow certain rules:

//   ✅ Requirements:
//   The class must have a private property _age of type number.
//   Create a getter method age that returns the user's age.
//   Create a setter method age that:
//   Accepts only values between 0 and 120 (inclusive).
//   If the value is invalid, it should throw an error: "Invalid age value".

class User{
    constructor(private age:number){}

    get getUserAge(){
        return this.age
    }
    set setNewAge(newAge:number){
        if (newAge >= 0 && newAge <=120) {
            this.age = newAge
        } else {
            throw new Error("Invalid value")
        }
    }
}


const polapan1 = new User(23)
  console.log( `Initial Age: ${polapan1.getUserAge}`);
  polapan1.setNewAge = 24
  console.log(`Age after adding: ${polapan1.getUserAge}`);








  
    

}