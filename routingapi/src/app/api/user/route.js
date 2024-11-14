import { users } from "@/utils/db"
import { NextResponse } from "next/server"

export const GET =()=>{
    console.log(params);
    const data = users;
    return NextResponse.json({data})
}