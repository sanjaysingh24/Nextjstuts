import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      <h1>This is the Student list</h1>
      <ul>
        <li><Link href="/Student/ram">Ram</Link></li>
        <li><Link href="/Student/shyam">shyam</Link></li>
        <li><Link href="/Student/mohan">mohan</Link></li>
        <li><Link href="/Student/sohan">sohan</Link></li>
        <li><Link href="/Student/vedu">Vedu</Link></li>

      </ul>
    </div>
  )
}

export default page
