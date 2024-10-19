'use client'
import React from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();
  return (
    <div>
      <h1>hi this is the login page</h1>
      <Link href = "/about">go to about page</Link>

      {/* now we have to use a button to navigate the page */}
 <div>
 <button onClick={()=>router.push('/about')} className="border-1 border-4">hello</button>
 </div>
    </div>
  )
}

export default page
