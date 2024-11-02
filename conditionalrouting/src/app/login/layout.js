'use client'
import Link from "next/link";
import { usePathname } from "next/navigation"; 
export default function Loginlayout({children}){
const pathname = usePathname();
// if we have multiple then we can do like this add an array and  by using includes check the pathname
const hidddenpathname = ["/login/teacher","/login/loginstudent"];

return(
    <div>
        {!hidddenpathname.includes(pathname)&&(<ul className="flex gap-3">
            <li>
                <h4>Login Navbar</h4>
            </li>
            <li>
                <Link href="/login"> Main login</Link>
            </li>
            <li>
                <Link href="/login/loginstudent"> login for student</Link>
            </li>
            <li>
                <Link href="/login/teacher"> login for teacher</Link>
            </li>
        </ul>
)}
        {children}
    </div>
)

}