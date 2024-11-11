"use client"
import Button from "@/components/Mycom";
async function getdata (){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}


export default async function page(){
let response = await getdata();
const handlclick = ()=>{
    console.log("baba");
}

    return (
        <div>
            <h1>this is the product list </h1>
             <div className="grid grid-cols-4">
               {response.map((item)=>{
                return(
                    <div key = {item?.id}>
                        <h4>{item?.title}</h4>
                        <img src = {item?.thumbnail}></img>

                    </div>
                )
               })}
               <Button onClick={handlclick}/>
             </div>
        </div>
    )
}