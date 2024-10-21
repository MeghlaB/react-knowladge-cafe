// import { space } from "postcss/lib/list"
import { IoBookmarkOutline } from "react-icons/io5";


export default function Blog({blog,handleBookMark,handlaeTime}) {
  // console.log(blog)
  const {cover,title,author_img,author,posted_date,reading_time,hashtags} = blog
  return (
    <div className="mb-20 space-y-3">
        <div>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between mt-2 p-2">
              <div className="flex">
                <img className="w-14" src={author_img} alt="" />
                <div className="ml-5">
                  <h3>{author}</h3>
                  <p>{posted_date}</p>
                </div>
              </div>
              <div className="items-center">
                <span>{reading_time} min read</span>
                <button
                  onClick={()=>handleBookMark(blog)}
                  className="ml-4 text-xl">
                  <IoBookmarkOutline></IoBookmarkOutline>
                  </button>
              </div>

            </div>
        </div>
        <h1 className='text-4xl'>{title}</h1>
        <p>
          {
            hashtags.map((hash,idx)=> <span key={idx} className="ml-5 pt-3"><a href="">#{hash}</a></span>)
          }
        </p>
        <p 
        onClick={()=>handlaeTime(reading_time)}
        className="text-xl text-purple-800 underline">Mark as read</p>
    </div>
  )
}

