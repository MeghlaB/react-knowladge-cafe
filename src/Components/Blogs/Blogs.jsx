import  { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

export default function Blogs({ handleBookMark ,handlaeTime }) {
    const [blogs ,setblogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])
  return (
    <div className='w-2/3'>
        <h1>Blogs:{blogs.length}</h1>
        {
          blogs.map(blog=> <Blog 
            key={blog.id} 
            blog={blog}
            handleBookMark={handleBookMark}
            handlaeTime={handlaeTime}
            >
            </Blog>)
        }
    </div>
  )
}
