import { Schema, model } from "mongoose";

const testModel = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String
});

export default model("test", testModel);