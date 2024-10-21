import React, { useEffect, useState } from 'react'

export default function Blogs() {
    const [blogs ,setblogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
  return (
    <div className='w-2/3'>
        <h1>Blogs:{blogs}</h1>
    </div>
  )
}
