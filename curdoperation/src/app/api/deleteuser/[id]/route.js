import { connectstr } from "@/lib/db";
import { User } from "@/lib/userModel/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
await mongoose.connect(connectstr);
export const DELETE=async(request,content)=>{
    const uid = await content.params.id;


    try{ 
    if(uid){
        let deletepro = await User.findOneAndDelete({_id:uid},{new:true});

        console.log(deletepro);
        return NextResponse.json({message:"Successfully deleted",success:true})
    }
    else{
        return NextResponse.json({message:"Please provide the data",success:false})
    }

}catch(error){
    console.log(error);
}

}