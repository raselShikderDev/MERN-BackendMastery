{
  // Abstruction

  // Abstraction can make in two ways
  // 1. Interface
  // 2. abstruct class
  // Parent class does not allow to create instance for it
  // Parent class give idea such as method implementation will be in child class
  // for creating using interface need to make interface that extends the interface using implements keyword
  // to make a abstrction class must add abstrucxt keyword / modifire for abstruction class
  // to make method abstruction must add abstract keyword / modifier before mehod name for abstruction class
  // method is not editable

  // Abstruction using Interface
  interface vehicle1 {
    starting(): void;
    moving(): void;
    stoping(): void;
  }

  class Car1 implements vehicle1 {
    starting(): void {
      console.log("I am strating");
    }

    moving(): void {
      console.log("I am moving");
    }

    stoping(): void {
      console.log("I am stoping");
    }

    test() {
      console.log("for testing purpose");
    }
  }
  class Bus1 implements vehicle1 {
    constructor(public vheiclename: string) {}
    starting(): void {
      console.log(`I am strating by ${this.vheiclename}`);
    }

    moving(): void {
      console.log(`I am moving by ${this.vheiclename}`);
    }

    stoping(): void {
      console.log(`I am stoping by ${this.vheiclename}`);
    }
  }

  const vh01 = new Car1();
  const vh02 = new Bus1("Ena Paribahan");
  //   vh01.starting();
  //   vh02.moving();

  // Abstrtion using abstruct class
  abstract class vehicle2 {
    abstract starting(): void;
    abstract moving(): void;
    abstract stoping(): void;
  }

  class Car02 implements vehicle2 {
    starting(): void {
      console.log("I am strating");
    }

    moving(): void {
      console.log("I am moving");
    }

    stoping(): void {
      console.log("I am stoping");
    }

    test() {
      console.log("for testing purpose");
    }
  }

  class Bus02 implements vehicle2 {
    constructor(public vheiclename: string) {}
    starting(): void {
      console.log(`I am strating by ${this.vheiclename}`);
    }

    moving(): void {
      console.log(`I am moving by ${this.vheiclename}`);
    }

    stoping(): void {
      console.log(`I am stoping by ${this.vheiclename}`);
    }
  }

  const vehcile01 = new Car02();
  const vehcile02 = new Bus02("Shyamoli Paribahan");
  //   vehcile01.starting()
  //   vehcile01.test()
  //   vehcile02.moving()
  //   vehcile02.stoping()
}

{
  //     🧩 Problem 1: Interface-Based Abstraction
  // 🎯 Problem: Payment Gateway Integration
  // You're building a system that handles different types of payment gateways. Each gateway must implement the following functionality:

  // 🔧 Requirements:
  // Create an interface named PaymentGateway with:
  // pay(amount: number): void
  // refund(transactionId: string): void
  // Create two classes that implement the interface:
  // PaypalGateway
  // StripeGateway
  // Each class should implement the pay() and refund() methods with different logic (log a different message showing the gateway name and operation).
  // Create a function processTransaction(gateway: PaymentGateway) that calls both pay() and refund().

  interface PaymentGateway {
    pay(amount: number): void;
    refund(trxId: string): void;
  }

  class PaypalGateway implements PaymentGateway {
    constructor(private gatway: string) {}

    pay(amount: number): void {
      console.log(`Successfully BDT ${amount} paid by ${this.gatway}`);
    }

    refund(trxId: string): void {
      console.log(
        `Refund has been processed by ${this.gatway}. Transaction id. ${trxId}`
      );
    }
  }
  class StripeGateway implements PaymentGateway {
    constructor(private gatway: string) {}

    pay(amount: number): void {
      console.log(`Successfully BDT ${amount} paid by ${this.gatway}`);
    }

    refund(trxId: string): void {
      console.log(
        `Refund has been processed by ${this.gatway}. Transaction id. ${trxId}`
      );
    }
  }

  const user01 = new PaypalGateway("paypal");
  const user02 = new StripeGateway("Stripe");

  user01.pay(5000)
  user01.refund("8A373HAk34HSk")
  user01.pay(3000)
  user01.refund("373HA39k34HSk6R")
}

{
  // 🧩 Problem 2: Abstract Class-Based Abstraction
  // 🎯 Problem: Vehicle Control System
  // You're designing a system that can control different types of vehicles.

  // 🔧 Requirements:
  // Create an abstract class Vehicle with:
  // An abstract method startEngine(): void
  // An abstract method stopEngine(): void
  // A concrete method status(): void that prints "Vehicle status check complete."
  // Create two subclasses:
  // Car
  // Bike
  // Each subclass must implement startEngine() and stopEngine() with their own messages.
  // Create a function controlVehicle(vehicle: Vehicle) that calls startEngine(), status(), and stopEngine().



  abstract class Vehicle {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    status() {
      console.log("Vehicle status check complete.");
    }
  }

  class Car001 extends Vehicle{
    startEngine(): void {
        console.log(`The ${this.constructor.name} has started successfully after 10 minute delay`)
    }
    stopEngine(): void {
        console.log(`The ${this.constructor.name} has Stopped successfully on time`)
    }
  }

  class Bike001 extends Vehicle{
    startEngine(): void {
        console.log(`The ${this.constructor.name} has started successfully after 10 minute delay`)
    }
    stopEngine(): void {
        console.log(`The ${this.constructor.name} has Stopped successfully on time`)
    }
  }

  
  const user1 = new Car001()
  const user3 = new Bike001()

  const controlVehicle =(vehicle: Vehicle)=>{
    vehicle.startEngine()
    vehicle.status()
vehicle.stopEngine()
  }

  controlVehicle(user1)
  controlVehicle(user3)








}
