import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/userInterfaces";

const userSchema = new Schema<IUser>({
    fName: {
      type: String,
      require: true,
    },
    lName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      trim: true,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "guest"],
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  })

  export const UserModel = mongoose.model("userModel", userSchema)