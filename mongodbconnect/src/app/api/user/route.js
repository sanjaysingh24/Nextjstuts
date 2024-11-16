import { NextResponse } from "next/server"
import mongoose from "mongoose"
import { connectstr } from "@/lib/db"
import { Product } from "@/lib/model/product";
export const GET=async(request)=>{
    let conect = await mongoose.connect(connectstr);
    if(conect){
        console.log("successfully connected to mongoose")
    }
    let product = await Product.find();
    console.log(product);
   
     
return NextResponse.json({product   })
}
