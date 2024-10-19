'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
    let router = useRouter();
  return (
    <div>
      <h1>this is the Login page</h1>
       <Link href="/about">go to about page</Link>

       <h1>navigate</h1>
       <div className='mt-4'>
        <button className='mt-3' onClick={()=>router.push('/about')}> go to about page</button>
       </div>
       <div >
        <button className='my-4 border border-4 border-red-500' onClick={()=>router.push("/login/loginteacher")}>Login for Teacher </button>
       </div>

       <div className='mt-3'>
        <button onClick={()=>router.push("/login/loginstudent")}>Login for Student </button>
       </div>
    </div>
  )
}

export default page
