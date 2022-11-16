const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
   {
      userId: {
         type: String,
         required: true,
      },
      firstName: {
         type: String,
         require: true,
         min: 3,
         max: 20,
         unique: true,
      },
      lastName: {
         type: String,
         require: true,
         min: 3,
         max: 20,
         unique: true,
      },
      email: {
         type: String,
         required: true,
         max: 50,
         unique: true,
      },

      profilePicture: {
         type: String,
         default: "",
      },
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("User", UserSchema);