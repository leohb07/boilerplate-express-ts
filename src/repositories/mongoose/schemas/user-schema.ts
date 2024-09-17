import { randomUUID } from "crypto";
import { model, Schema } from "mongoose";

const User = new Schema(
  {
    _id: {
      type: String,
      default: randomUUID,
    },
  },
  {
    collection: "tokens",
    timestamps: true,
  },
);

export const UsersSchema = model("users", User);
