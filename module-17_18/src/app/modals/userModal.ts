import mongoose, { Model, Schema } from "mongoose";
import { IUser, IAddress, IPasswordHash, IStaticPasswordHash } from "../interfaces/userInterfaces";
import validator from 'validator';
import bcrypt  from "bcrypt"
import { NoteModel } from "./noteModal";


const addressSchema = new Schema<IAddress>({
  city:String,
  street:String,
  zip:Number,
},{
  _id:false
})


const userSchema = new Schema<IUser, /*Model<IUser>*/ IStaticPasswordHash/*, IPasswordHash*/>({
    fName: {
      type: String,
      require: true,
      min:[3, "name must be at least 3 letter"],
    max:[15, "name must be within 15 letter"],
    },
    lName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
      lowercase:true,
      uniqe:[true, "Email must be uniqe"],
      // validate:{
      //   validator: (value)=> {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      //   },
      //   message:(props)=>{
      //     return `Email ${props.value} does not meet the requirments`
      //   }
      // }
      validate:[validator.isEmail, `"{VALUE}" is Invalid email`]

    },
    password: {
      type: String,
      require: true,
      trim:true,
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin", "guest"],
        message:"Role is not valid, got {VALUE} role",
      },
      default: "user",
      
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    address:addressSchema
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
  })


// Built in custom Instance method
  userSchema.method("hashPassword", async function hashPassword(this: any, plainPass:string){
  const hasedPassword = await bcrypt.hash(plainPass, 10)
    console.log(hasedPassword)
    this.password = hasedPassword
    return this.password
})


// Built in custom static method
userSchema.static("hashPassword", async function hashPassword(this: any, plainPass:string){
  const hasedPassword = await bcrypt.hash(plainPass, 10)
    console.log(hasedPassword)
    this.password = hasedPassword
    return this.password
})


// Pre hook to convert into hash

// Document pre hook
userSchema.pre("save", async function(next){
  console.log("From inside of pe hooks");
  this.password = await bcrypt.hash(this.password, 10)
  next()
})


// post hook to convert into hash

// Document post hook
userSchema.post("save", async function(){
  console.log("From inside of pe hooks");
  this.password = await bcrypt.hash(this.password, 10)
  console.log("%s has been created in post hooks", this.password);
  
})


// Query hook to delete notes of user after deleting the user

// Query post hoook
userSchema.post("findOneAndDelete", async function(doc){
  console.log("Deleted user", doc);
  if (doc) {
    await NoteModel.find({userId: doc._id})
    await NoteModel.deleteMany({userId: doc._id})
    console.log(`All note has been deleted of user "${doc._id}"`);
    
  }
})

// Virtuals
// adding an extra feild call fullname which will retrun combine of Fname and Lname of user that is not in mongodb while quering 
userSchema.virtual("fullname").get(function(){
  return `${this.fName} ${this.lName}`
})




  export const UserModel = mongoose.model<IUser, IStaticPasswordHash>("users", userSchema)