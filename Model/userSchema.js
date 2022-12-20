import mongoose from "mongoose"
const { Schema } = mongoose;

const UserSchma = new Schema({
  name:{
    type: String, required:true
  },
  email:{
    type: String, required:true
  },
  password:{
    type: String, required:true
  },
  repeatePassword:{
    type: String, required:true
  },

});

export default new mongoose.model("UserData", UserSchma)
