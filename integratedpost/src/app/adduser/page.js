"use client"
import { useState } from "react";

const page = ()=>{
    const[data,setData] = useState({
        Name:""
    });
    const handlechange =(e)=>{
        const{name,value} = e.target;
        setData((prev)=>{
            return{...prev,[name]:value}
        })
    
    }
    const handleclick = async(e)=>{
        e.preventDefault();
        let response = await fetch("http://localhost:3000/api/user",{
            method:"Post",
            body:JSON.stringify({data})
        })
        response = await response.json();
 if(response.success){
alert("data successfully sent")
 }
 else{
    alert("data successfully sent")
 }
        
    }

    return(
        <div>


        <h1>this is the form for add user</h1>
        <form>
            <label>First NAme: </label>
            <input type='text' placeholder="Enter the name" name="Name" onChange={handlechange} value={data.Name} >
             </input>
             <button onClick={handleclick}>Submit</button>

        </form>
        </div>

    )
}

export default page;