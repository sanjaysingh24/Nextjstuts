"use client"
import React from 'react'
import Button from '@/components/Mycom'
const page = () => {
    const handleButtonClick = () => {
        console.log("hello sir");
 
      };
  return (
   <>
   
   <div>page</div>
  <Button onClick={handleButtonClick}></Button>
   </>
  )
}

export default page