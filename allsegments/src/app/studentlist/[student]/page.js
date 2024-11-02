import React from 'react'

const page = ({params}) => {
  return (
    <div>
      Dynamic student details {params.student}
    </div>
  )
}

export default page