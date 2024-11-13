
const getdata  = async()=>{
    let data = await fetch("https://dummyjson.com/users");
       data = await data.json();
    return data.users;
}
const page = async()=>{
const apidata = await getdata();


return(
        
      <div>

<h1>User name list</h1>
        {apidata.map((item)=>{
            return(
                <>
                <h1>FirstName: {item?.firstName}</h1>
                </>
            )
        })}
      </div>
   
    )
}
export default page;