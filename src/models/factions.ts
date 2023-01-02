import mongoose, { Schema, model, connect } from "mongoose";

interface IFaction {
  name: String;
}
const factionSchema = new Schema<IFaction>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true,
    //idk if necesery to validate anything ?
    validate(value) {},
  },
});

factionSchema.virtual("units", {
  ref: "Unit", //i dont think this is correct as there is no "Unit"
  localField: "name",
  foreignField: "faction",
});

const Faction = mongoose.model("Faction", factionSchema);

module.exports = Faction;
