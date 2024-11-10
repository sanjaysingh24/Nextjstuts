"use client"
import React from 'react'

const page = ({params}) => {

  return (
    <div>
      <h1>Student detail list {params.student}</h1>
    </div>
  )
}

export default page
