const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserInfoSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: false
    },
    
  },
  { timestamps: true }
);

module.exports = UserInfo = mongoose.model("userinfos", UserInfoSchema);
