import Product from "./product";

async function getdata (){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    return data.products;
}
// now i use the client component to the server component in next js

// we can not perform any event  in the server component and we can use only the events in the client component
const page=async()=>{
let response = await getdata();

    return(
        <>
        <h1>hello sir</h1>
        <div className="grid grid-cols-4">
            {response.map((item)=>{
               return(
                <div className="text-center ms-auto me-auto">
                    <h3 className="text-center">{item?.title}   </h3>
                    <img src = {item?.thumbnail} className="aspect-square object-contain"></img>
                    <Product price = {item?.price}/>
                    </div>
               )
            })}
      


        </div>
        </>
    )
}
export default page;