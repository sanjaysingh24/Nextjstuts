import Link from "next/link";

export default function Layout({children}){
    return(
        <div>
            <h1 className="text-xl font-bold">Common layout for login Screen</h1>
            <ul>
                <li>
                    <Link href="/login">Login </Link>
                </li>
                <li>
                    <Link href="/login/loginstudent">Login for student </Link>
                </li>
                <li>
                    <Link href="/login/loginteacher">Login for teacher </Link>
                </li>
            </ul>
            {children}
        </div>
    )
}