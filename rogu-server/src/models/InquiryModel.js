const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inquirySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true,
  },
}, {timestamps: true});

module.exports = mongoose.model("Inquiry", inquirySchema);
