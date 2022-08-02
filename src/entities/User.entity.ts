import mongoose, { Document, Model, model } from "mongoose";
import InterfaceBase from "./InterfaceBase";

const mongoose_delete = require("mongoose-delete");
const Shema = mongoose.Schema;

export interface IUser extends InterfaceBase {
  name: string;
  email: string;
  password: string;
  avatar?: string;
  role: "ADMIN" | "USER";
}

const userShema = new Shema<IUser>(
  {
    name: { type: String },
    email: { type: String },
    password: { type: String },
    avatar: {
      type: String,
      required: false,
      default:
        "https://res.cloudinary.com/dd1yamek1/image/upload/v1659337130/blog_it/image_user_gi0gju.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userShema.plugin(mongoose_delete, {
  deletedAt: true,
  overrideMethods: "all",
});

const User: Model<IUser> = model<IUser>("User", userShema);

export default User;
