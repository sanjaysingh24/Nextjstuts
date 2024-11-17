import { connectstr } from "@/lib/db";
import { User } from "@/lib/userModel/user";
import axiosInstance from "@/utils/axiosInstance";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
await mongoose.connect(connectstr);
export const GET=async(request)=>{
try{
    let data = await User.find();
    if(data.length>0){
        return NextResponse.json({data,success:true});
    }
    else{
        return NextResponse.json({message:"No data found",success:false});
    }
   
}catch(error){
    console.log(error);
}
}

