const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    imgCan: {
      type: String,
      required: "imgCan cannot be empty",
    },
    name: {
      type: String,
      required: "name cannot be empty",
    },
    party: {
      type: String,
      required: "party cannot be empty",
    },
    num: {
      type: Number,
      required: "num cannot be empty",
    },
    policy: {
      type: String,
      required: "policy cannot be empty",
    },
    slogan: {
      type: String,
      required: "slogan cannot be empty",
    },
  },
  { collection: "candidate" }
);

module.exports = mongoose.model("candidate", taskSchema);
