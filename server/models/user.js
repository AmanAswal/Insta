const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pic:{
    type:String,
    default: "https://res.cloudinary.com/amanaswal/image/upload/v1599584027/no_dp_fro9mx.jpg"
  },
  followers:[{type: ObjectId, ref:"User"}],
  following:[{type: ObjectId, ref:"User"}]
});

mongoose.model("User", userSchema);
