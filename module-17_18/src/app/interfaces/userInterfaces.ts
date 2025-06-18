export interface IAddress {
  city: string;
  street: string;
  zip: number;
}

export interface IPasswordHash{
  hashPassword(pass:string):string
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
