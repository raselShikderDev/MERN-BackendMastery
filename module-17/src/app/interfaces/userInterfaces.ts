export interface IUser {
  fName: {
    type: string;
    require: true;
  };
  lName: {
    type: string;
    require: true;
  };
  email: {
    trim: true;
    type: string;
    require: true;
  };
  password: {
    type:string,
    require:true
  };
  role: {
    type: string;
    enum: ["user", "admin", "guest"];
    default: "user";
  };
  isVerified: {
    type: boolean;
    default: false;
  };
}
