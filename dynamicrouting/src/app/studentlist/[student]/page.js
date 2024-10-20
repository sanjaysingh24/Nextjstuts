'use client'
import React from 'react'

const page = ({params}) => {
    console.log(params.student);
  return (
    <div>
      <h1 className='px-6 mt-5 text-xl font-bold'>
        Student details
      </h1>
    </div>
  )
}

export default page
