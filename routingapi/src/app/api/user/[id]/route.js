import { users } from "@/utils/db"
import { NextResponse } from "next/server";

export const GET=async(request,content)=>{
    const uid = await content.params?.id;
    const user = users;
    const detaildata = user.filter((item)=>item.id==uid)
   if(detaildata.length!=0){
    return NextResponse.json({detaildata});
}
else if(detaildata.length===0){
    return NextResponse.json({message:"No record Found"})
}
   }