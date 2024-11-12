"use client"
// for using this we use css module
import custom from './style.module.css'
import { useState } from 'react';
export default function Home() {
  const[color,setcolor] = useState("red")
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
 <h1 className={color=="red"?custom.red:custom.green}>Condition With Style</h1>
 <h2 style={{backgroundColor:color==="red"?'red':'green'}}>Heading2</h2>
{/* i want to use a button to change the color of the text */}
<h3 id = {custom.h3}>Hey therer</h3>
<button onClick={()=>setcolor("green")}> change the color</button>
    </div>
  );
}
