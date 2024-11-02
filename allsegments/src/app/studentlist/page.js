import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <ul>
        <li><Link href="/studentlist/Sanju">Sanju</Link></li>
        <li><Link href="/studentlist/Sam">Sam</Link></li>
        <li><Link href = "/studentlist/Ram">Ram</Link></li>
        <li><Link href="/studentlist/Mohit">Mohit</Link></li>

      </ul>
    </div>
  )
}

export default page
