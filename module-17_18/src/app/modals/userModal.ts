import mongoose, { Model, Schema } from "mongoose";
import { IUser, IAddress, IPasswordHash } from "../interfaces/userInterfaces";
import validator from 'validator';
import bcrypt  from "bcrypt"


const addressSchema = new Schema<IAddress>({
  city:String,
  street:String,
  zip:Number,
},{
  _id:false
})


const userSchema = new Schema<IUser, Model<IUser>, IPasswordHash>({
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
  })



  userSchema.method("hashPassword", async function hashPassword(this: any, plainPass:string){
  const hasedPassword = await bcrypt.hash(plainPass, 10)
    console.log(hasedPassword)
    this.password = hasedPassword
    return this.password
})

  export const UserModel = mongoose.model("users", userSchema)