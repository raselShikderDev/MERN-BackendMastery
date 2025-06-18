import { Model } from "mongoose";

export interface IAddress {
  city: string;
  street: string;
  zip: number;
}


export interface IUser {
  fName: string;
  lName: string;
  email: string;
  password: string;
  role: {
    type: string;
    enum: "user" | "admin" | "guest";
    default: "user";
  };
  isVerified: {
    type: boolean;
    default: false;
  };
  address: IAddress;
}



export interface IPasswordHash{
  hashPassword(pass:string):string
}


export interface IStaticPasswordHash extends Model<IUser>{
  hashPassword(pass:string):string
}