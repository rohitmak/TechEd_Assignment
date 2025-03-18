const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: Number,
  gender: String,
  address: String,
  email: String,
  phone: String,
  bio: String,
  preferredLanguage: String,
  interestedTopic: String,
  socialMedia: String,
  education: String,
  workExperience: String,
});

module.exports = mongoose.model("Profile", profileSchema);
