// import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()  
  return (
    <div className=' text-center text-3xl bg-gray-500 text-white p-4 '>
      user : {userid}
    </div>
  )
}

export default User
