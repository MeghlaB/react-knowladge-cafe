
import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'

function App() {
const [bookmarks,setbookmars] = useState([])

const [readingTime ,setreadingTime] = useState(0)

// bookmark btn ay cick korly akta title add hbe
const handleBookMark = (blog)=>{
  // console.log(blog)
  const newbookmarks = [...bookmarks,blog]
  console.log(newbookmarks)
  setbookmars(newbookmarks)
}
// mark as read btn ay clcik krly time set hbe
const handlaeTime = (time)=>{
  // console.log('marka as read time')
  const newreadingTime = readingTime+time
  setreadingTime(newreadingTime)
}
  return (
    <>
     <Header></Header>
     <div className='container mx-auto md:flex gap-4'>
        <Blogs
        handleBookMark={handleBookMark}
        handlaeTime={handlaeTime}
        ></Blogs>
        <Bookmarks 
        bookmarks ={bookmarks}
        readingTime={readingTime}
        ></Bookmarks>
     </div>
      
    </>
  )
}

export default App
