"use client"
import React,{useState} from 'react'

 const page = () => {
    let[change,setcolor] = useState(false);
    let [styleh4,setstyleh4] = useState({backgroundColor:"red"})
    const handleclick = ()=>{
        setcolor(!change)
    }
  return (
    <div>
        <h1 style={{backgroundColor:change?"yellow":"green"}}>Users</h1>
        <h2 style={{backgroundColor:change?"red":"blue"}}>heading two in main page</h2>
        <h4 style={styleh4}>hii baba how are you</h4>
        <button onClick={handleclick}>Change the color</button>
    </div>
  )
}

export default page;