const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema(
  {
    idCard: {
      type: String,
      required: "idCard cannot be empty",
    },
    walletId: {
      type: String,
      required: "walletId cannot be empty",
    },
    firstname: {
      type: String,
      required: "firstname cannot be empty",
    },
    lastname: {
      type: String,
      required: "lastname cannot be empty",
    },
    birthday: {
      type: String,
      required: "birthday cannot be empty",
    },
    gender: {
      type: String,
      required: "slogan cannot be empty",
    },
    email: {
      type: String,
      required: "email cannot be empty",
    },
    phoneNumber: {
      type: String,
      required: "phoneNumber cannot be empty",
    },
    adrressInfo: {
      type: String,
      required: "adrressInfo cannot be empty",
    },
    district: {
      type: String,
      required: "district cannot be empty",
    },
    register: {
      type: Boolean,
      required: "register cannot be empty",
    },
    registrationStatus: {
      type: Number,
      required: "registrationStatus cannot be empty",
    },
    imgCard: {
      type: String,
      required: "imgCard cannot be empty",
    },
    imgVoter: {
      type: String,
      required: "imgVoter cannot be empty",
    },
  },
  { collection: "voter" }
);

module.exports = mongoose.model("voter", taskSchema);
