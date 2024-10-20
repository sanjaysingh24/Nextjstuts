import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div>
      <h1 className='mt-5 px-5 text-xl font-bold'>
        These are students
      </h1>
      <ul className='px-5'>
        <li>
            <Link href = "/studentlist/sanju">sanju</Link>
        </li>
        <li>
        <Link href = "/studentlist/ram">ram</Link>
        </li>
        <li>
          <Link href="/studentlist/mohit">  mohit</Link>
        </li>
        <li>
            <Link href="/studentlist/vedant">vedant</Link>
            </li>
      </ul>
    </div>
  )
}

export default page
