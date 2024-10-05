
export default function Home() {

const name = "sanju baba is here"
const syam = "dsjfjkasd"
  return (
 <>
 <div>

   <h2 className ="text-center text-3xl">Hii sanju</h2>
   <User name={name}></User>
   <User name={syam}></User>
   
   {/* <User></User> */}
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