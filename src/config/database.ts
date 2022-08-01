import mongoose, { ConnectOptions } from "mongoose";

export default async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://thanhthien0706:L4vFDYZfmsgOcXX4@cluster0.6gx1lv9.mongodb.net/DB_BLOG_IT?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Connect mongo successfully ");
  } catch (e) {
    console.log("Connect mongo failed: " + e);
  }
}
