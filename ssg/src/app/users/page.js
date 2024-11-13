import Link from "next/link";
import {result,getusers} from "../../../services/getuser";

const Page = async () => {
  const getData = await result();
  

  return (
    <div>
      <h1>Users list</h1>
      {getData.map((user)=>(
        <h2 key ={user?.id}>
           <Link href={`/users/${user?.id}`}>{user?.firstName}</Link>
             
        </h2>
      ))}
    </div>
  );
};

export default Page;
