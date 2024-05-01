import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  favourites: {
    type: [String],
    default: [],
  },
});

export const User = mongoose.models.users ?? mongoose.model("users", schema);
