"use client"
import Script from "next/script";

const page = ()=>{
    return(
        <>
        <Script src="/location.js" onLoad={()=>console.log("File loaded successfully")
        }></Script>
        <div>
            <h1>Hii this is the user detail and here  we got the user location by importing the external script</h1>
            
        </div>
        
        </>
    )
}

 const generateMetadata=()=>{
    return{
        title:"User detail page"
    }
}
export default page;


