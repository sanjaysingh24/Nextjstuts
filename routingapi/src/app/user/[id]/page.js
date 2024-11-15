async function getdetail (id){
    let data = await fetch(`http://localhost:3000/api/user/${id}`);
    data = await data.json();
    return data;
}


const page =async ({params})=>{
const uid = await params;
const id = uid.id;

let data = await getdetail(id);
let detail = data?.detaildata;


    return(
        <>
        
    
        <h1> this it the dynamic page  here you can find the dtail   </h1>

         <p>First Name: {detail[0].name}</p>
         <p>Age: {detail[0].age}</p>
         <p>Email: {detail[0].email}</p>

        </>
    )
}
export default page;