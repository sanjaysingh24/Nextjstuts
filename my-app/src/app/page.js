'use client'

import { useState } from "react";


export default function Home() {
const[name,setname] =useState("Anil");


  return (
 <>
 <div>

   <h2 className ="text-center text-3xl mt-5">Hii sanju</h2>
 <h1 className="text-3xl text-center bg-slate-600 py-3 px-4">Basic Routings and Make new pages
 </h1>

</div>
 </>
  );
}


const User =({name})=>{
  return(
    <>
     <h1 className="text-center text-3xl">hello {name}</h1>
    </>
  )
}