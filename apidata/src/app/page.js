"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const navigate = (name)=>{
    router.push(name);

  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
 <h1>This tuts for  fetch the api  and display the data</h1>
 <Link href="/productList">click here to show the product list</Link>
  <button onClick={()=>navigate("/productList")}>
     navigate to the product list
  </button>
    
    </div>
  );
}
