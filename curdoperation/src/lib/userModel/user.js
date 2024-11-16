import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    Name:String,
    Address:String,
    About:String
})

export const User = mongoose.models.User || mongoose.model("User",userSchema);