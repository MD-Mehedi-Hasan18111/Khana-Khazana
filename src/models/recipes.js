import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
  },
  activeTime: {
    type: String,
  },
  totalTime: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  serves: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  rating: {
    type: [String],
  },
});

export const Recipe =
  mongoose.models.recipes ?? mongoose.model("recipes", schema);
