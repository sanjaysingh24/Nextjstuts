"use client"
const Product = ({price})=>{
const handleclick = ()=>{
    alert(price)
}
return(
    <div>
        <button onClick={handleclick} className="border border-2 px-4 py-1 border-red-500 mb-4">check price</button>
    </div>
)
}
export default Product