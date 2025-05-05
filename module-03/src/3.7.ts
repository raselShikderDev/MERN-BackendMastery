{
  // Static

  class Counter {
    static count: number = 0;

    static Increment() {
      //return this.count = this.count + 1        // ater using static in property or method this keyword become invalid
      return (Counter.count = Counter.count + 1); // to call property or method must use class name insted this keyword
    }
    static Decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  // const user1 = new Counter()
//   console.log(`Inital Count: ${Counter.count}`);
//   console.log(Counter.Increment());
//   console.log(Counter.Increment());
//   console.log(Counter.Increment());
//   console.log(Counter.Decrement());










//   🧠 Problem: Tracking Number of Users with Static Property
//   You are building a User class for an app, and you want to track how many users have been created, regardless of their individual instances.
  
//   ✅ Requirements:
//   Create a class User with:
//   A static property userCount that starts at 0.
//   A constructor that takes a user's name (e.g., constructor(name: string)).
//   Each time a new User is created, the static userCount should increment by 1.
//   A static method getUserCount() that returns the total number of users created so far.


// class User{
//    static userCount:number = 0
   
//    getUsercount(){
//     return User.userCount
//    }

//    createUser(name:string){
//     if (name) {
//         return User.userCount = User.userCount + 1
//     } else {
//         throw new Error("Invalid Input")
//     }
//    }
// }
// const user1 = new User()
// console.log(user1.getUsercount())
// console.log(user1.createUser("hello"))
// console.log(user1.createUser("Rasel"))
// console.log(user1.createUser("Rasel"))
// console.log(user1.createUser("Rasel"))
class User{
   static userCount:number = 0
   constructor(public name:string){
    if (!name) {
        throw new Error("Invalid Input")
    } 
    this.name = name;
    User.userCount = User.userCount + 1
   }
    static getUsercount(){
    return User.userCount
   }

}
console.log(`Before: ${User.getUsercount()}`)
const user1 = new User("Rasel")
const user2 = new User("Rasel")
const user3 = new User("Rasel")
console.log(`After: ${User.getUsercount()}`)


















}
