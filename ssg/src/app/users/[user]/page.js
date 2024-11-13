import { getusers,result } from "../../../../services/getuser";
import Image from "next/image";
export default async function page({params}){
let id = params.user;
const userdetail = await getusers(id);


    return(
        <div>
             <h3>User Details</h3>
         <h4> Name: {userdetail?.firstName} {userdetail?.lastName}</h4>
         <p>Age: {userdetail?.age}</p>
         <Image src={userdetail?.image} width={50} height={50} alt="Profile image"></Image>

        </div>
    )
}
export async function generateStaticParams(){
    const getData = await result();
    return getData.map(users=>({
        userId:users.id.toString()
    }))
}
