import * as mongoose from "mongoose";
import * as validator from "validator";

const FactionSchema = new mongoose.Schema({
  name: String,
  required: true,
  trim: true,
  lowercase: true,
  uniqe: true,
});
