import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Pet", petSchema);
