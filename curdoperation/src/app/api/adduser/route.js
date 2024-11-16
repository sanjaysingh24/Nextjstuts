import { connectstr } from "@/lib/db";
import { User } from "@/lib/userModel/user";
import mongoose from "mongoose"

import { NextResponse } from "next/server"
export const POST = async(request)=>
{
await mongoose.connect(connectstr);
const payload = await request.json();
const{Name,Address,About} = payload;
try{
    if(!Name || !Address || !About){
        return NextResponse.json({message:"Please Provide all the dtails",success:false})
    }
    else{
        let newuser = new User({
            Name:Name,
            Address:Address,
            About:About
        })
        let data  = await newuser.save();
        return NextResponse.json({data});
    }
}catch(error){
    return NextResponse.json({message:error.message})
}
}