
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setbookmars] = useState([])

const handleBookMark = (blog)=>{
  // console.log(blog)
  const newbookmarks = [...bookmarks,blog]
  console.log(newbookmarks)
  setbookmars(newbookmarks)
}

  return (
    <>
     <Header></Header>
     <div className='container mx-auto md:flex gap-4'>
        <Blogs
        handleBookMark={handleBookMark}
        ></Blogs>
        <Bookmarks bookmarks ={bookmarks}></Bookmarks>
     </div>
      
    </>
  )
}

export default App
