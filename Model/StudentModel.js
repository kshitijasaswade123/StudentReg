const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required:true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("StudentData", StudentSchema);
