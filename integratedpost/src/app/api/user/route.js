import { NextResponse } from "next/server";

export const POST=async(request)=>{
let payload = await request.json();
const{data}  = payload;
const {Name} = data;
console.log(Name);
return NextResponse.json({data:payload,success:true},{status:201})

}
