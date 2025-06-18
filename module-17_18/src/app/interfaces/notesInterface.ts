import { Types } from "mongoose";

export interface INotes {
  title: {
    type: string;
    require: true;
    trim: true;
  };
  body: {
    type: string;
    default: "";
  };
  isActive: Boolean;
  numberOfChar: Number;
  category: {
    type: string;
    enum: ["personal", "world", "tech", "unknown"];
    default: "unknown";
  };
  comments: [
    {
      title: string;
      body: string;
    }
  ];
  labels: {
    type: string;
    color: ["lightBlue", "green", "red", "yellow", "beige"];
    default: "red";
  };
  userId:Types.ObjectId;
}
