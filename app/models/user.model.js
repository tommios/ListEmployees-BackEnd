const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userScheme = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

userScheme.plugin(uniqueValidator);

module.exports = mongoose.model("User", userScheme);
