import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1 className="text-xl mt-5 px-5">Hi this is the about page my first routing</h1>
      <Link href ="/login">Go to login page</Link>
    </div>
  )
}

export default page
