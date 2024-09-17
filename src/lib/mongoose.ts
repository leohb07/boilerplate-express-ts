import mongoose from "mongoose";
import { env } from "../env";

export async function connection() {
  try {
    await mongoose.connect(env.MONGODB_URI);
    console.log("✅ Database connected.");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connection, 5000);
  }
}
