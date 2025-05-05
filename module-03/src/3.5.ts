{
  // access Modifire - Readonly, Public, Private, Protected


  // Readonly       - Property and method only can readable, has no access to edit from anywhere
  // Public         - Property and method Editable from anywhere
  // Private        - Property and method only can be edit from inside the class and while initiling constructor 
  // Protected (_)  - It allows property or method to access only in child class to modify

  // Initialing a class call BankAccount
  class BankAccount {
    constructor(
      readonly id: number,
      readonly name: string,
      protected balance: number
    ) {}

    public addDeposit(amount:number){
        return this.balance + amount
    }

    public getBalance(amount:number){
        return this.balance
    }

  }

  class StudentAccount extends BankAccount{
    constructor(id:number, name:string, balance:number){     // Balance is not accessable while private modifier is assign in parent class (BankAccount)
        super(id, name, balance)
        }
        test(){
            this.balance          // Balance is accesable while i chnage modidfier of balance property from private to protected
        }
    }
    
    



















}

