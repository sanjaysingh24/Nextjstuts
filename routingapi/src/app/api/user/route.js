import { users } from "@/utils/db"
import { NextResponse } from "next/server"

export const GET =()=>{
  
    const data = users;
    return NextResponse.json({data})
}