"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const layout = ({children}) => {
const pathname = usePathname();
const hiddenpathname = ["/login/loginstudent","/login/loginteacher"];
  return (
    <div>
      {!hiddenpathname.includes(pathname) && (
           <ul className="flex gap-10 bg-black text-white py-4 mb-5">
           <h4>login navbar</h4>
               <li><Link href="/login">Login </Link></li>
               <li><Link href="/login/loginstudent">Login as student</Link></li>
               <li><Link href="/login/loginteacher">Login as teacher</Link></li>
             </ul>
      )}
      {children}
    </div>
  )
}

export default layout
