import * as mongoose from "mongoose";
import * as validator from "validator";

const unitSchma = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  /* need to add validation to see if the faction
  exist in the factions DB */
  faction: {
    type: String,
    required: true,
    trim: true,
    validate() {},
  },
});
