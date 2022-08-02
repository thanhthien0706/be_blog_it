import { ObjectId } from "mongoose";

export default interface InterfaceBase {
  _id: ObjectId;
  createAt: Date;
  updatedAt: Date;
}
