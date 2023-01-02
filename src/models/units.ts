import mongoose, { Schema, model, connect } from "mongoose";

interface IUnit {
  //identefires
  name: String;
  faction: String[];
  // common characteristics
  price: number;
  models: number;
  role: String[];
  battleLineIf: String[];
  //defensive stats
  wounds: number;
  save: number;
  ward: number;
  //other stats
  bravary: number;
  move: number;
  //aggresive stats
  attacks: number;
  toHit: number;
  toWound: number;
  rend: number;
  damage: number;
}

const UnitSchema = new Schema<IUnit>({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {},
  },
  faction: [
    {
      type: String,
      trim: true,
      lowercase: true,
      default: "generic",
      validate(value) {},
    },
  ],
  price: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0 && Number.isInteger(value)) {
        throw new Error("price must be a positive integer");
      }
    },
  },
  models: {
    type: Number,
    default: 1,
    validate(value) {
      if (value < 1 && Number.isInteger(value)) {
        throw new Error("must be a positive number of models");
      }
    },
  },
  //maybe add validation ?
  role: [
    {
      type: String,
      trim: true,
      lowercase: true,
    },
  ],
  //validate to cheack if unit/sub-faction is legit
  battleLineIf: [
    {
      type: String,
      lowercase: true,
      trim: true,
      validate() {},
    },
  ],
  wounds: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0 && Number.isInteger(value)) {
        throw new Error("unit must have a positive number of wounds");
      }
    },
  },
  save: {
    type: Number,
    default: 7,
    validate(value) {
      if (value < 1 && value > 7 && Number.isInteger(value)) {
        throw new Error("unit save must be between 1 and 7");
      }
    },
  },
  ward: {
    type: Number,
    default: 7,
    validate(value) {
      if (value < 1 && value > 7 && Number.isInteger(value)) {
        throw new Error("unit ward must be between 1 and 7");
      }
    },
  },
  bravary: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 && Number.isInteger(value)) {
        throw new Error("unit bravary must be a positive integer");
      }
    },
  },
  move: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 && Number.isInteger(value)) {
        throw new Error("unit bravary must be a positive integer");
      }
    },
  },
  //per model
  attacks: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 && Number.isInteger(value)) {
        throw new Error("unit attacks must be a positive integer");
      }
    },
  },
  toHit: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 && value > 6 && Number.isInteger(value)) {
        throw new Error("unit to-hit must be between 1 to 6");
      }
    },
  },
  toWound: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 1 && value > 6 && Number.isInteger(value)) {
        throw new Error("unit to-wound must be between 1 to 6");
      }
    },
  },
  rend: {
    type: Number,
    required: false,
    default: 0,
    validate(value) {
      if (value < 0 && Number.isInteger(value)) {
        throw new Error("rend must be non-negetive");
      }
    },
  },
  damage: {
    type: Number,
    required: false,
    default: 1,
    validate(value) {
      if (value < 1 && Number.isInteger(value)) {
        throw new Error("unit to-hit must be positive integer");
      }
    },
  },
});

const Unit = mongoose.model("Unit", UnitSchema);

module.exports = Unit;
