import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "please provide username"],

    unique: true,
  },

  email: {
    type: String,
    require: [true, "please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valid email",
    ],
    unique: true,
  },

  password: {
    type: String,
    require: [true, "please provide name"],
    minLength: 6,
  },
});

const UserSchemaState =
  mongoose.models.Users || mongoose.model("Users", UserSchema);

export default UserSchemaState;
