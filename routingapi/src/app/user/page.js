import Link from "next/link";

async function getdata(){
    let data = await fetch("http://localhost:3000/api/user");
    data  = await data.json();
return data.data;
}


const page = async()=>{

    let getdatas = await getdata();
 
    return (
     <>
     {getdatas.map((item)=>{
        return(
        <>
    
    <Link href ={`/user/${item?.id}`}><p>{item?.name}</p></Link>
        </>
        )
     })}
     
     </>
    )
      
}
export default page;