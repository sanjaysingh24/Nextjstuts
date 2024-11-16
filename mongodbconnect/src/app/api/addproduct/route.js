import { connectstr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export const POST = async(request)=>{
//connect to mongodb 
await mongoose.connect(connectstr);
try{
    let payload = await request.json();
    const {Name,price,color,category} = payload;
     if(!Name ||!price || !color || !category){
        return NextResponse.json({message:"Please Enter these values"},{success:false});

     } 
     else{
        let newpro = new Product({
            Name:Name,
            price:price,
            color:color,
            category:category
        })
        let prod = await newpro.save();
    return NextResponse.json({prod}) 
    }

}catch(error){
    console.log(error);
    return NextResponse.json({message:error.message});
}


}