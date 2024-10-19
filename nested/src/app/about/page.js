'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
  return (
    <div>
      <h1>this is the about page</h1>
      {/* //linking the page */}
      <Link href="/login"> go to login page</Link>
 
    {/* navigatethe page */}
   <div>
   <button onClick={()=>router.push('/login')}> go to login one </button>
<br/>
<Link href ="/about/aboutcollage">go to about collage page</Link>
<br/>
<Link href ="/about/aboutstudent">go to about student page</Link>

   </div>

    </div>
  )
}

export default page
