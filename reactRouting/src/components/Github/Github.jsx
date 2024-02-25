/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

let usn 
function Github() {
  const data = useLoaderData()
  const {userName} = useParams()  
  usn = userName
//     const [data , setData] = useState([])
//     useEffect(() =>{
//         fetch(`https://api.github.com/users/${userName?userName:'jaisingh007'}`)
//         .then(res=>res.json())
//         .then(data=>
//           {
//           setData(data);
//         })
// },[])

  return (
    <div className=' text-center text-3xl bg-gray-500 text-white p-4 '>
      <h1>{data.login}</h1>
      <div>
      <img className=' rounded-full mx-auto w-300 my-5 p-1' src={data.avatar_url} alt="profile pic" />
      </div>
      
      <p><strong>Bio:</strong> {data.bio}</p>
      <br />
      Followers : {data.followers}
      {/* user : {userName} */}
    </div>
  )
}

export default Github
export const githubInfoLoader = async () =>
{
  const response = await fetch(`https://api.github.com/users/${usn?usn:'jaisingh007'}`)
return response.json()
}
