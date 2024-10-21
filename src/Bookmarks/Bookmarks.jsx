import Bookmark from "../Bookmark/Bookmark";


export default function Bookmarks({bookmarks ,readingTime}) {
  return (
    
    <div className='w-1/3 border my-2 card bg-red-50 text-center rounded-lg p-4'>
        <h1 className="text-3xl border bg-blue-300 rounded-lg p-5">Reading Time :{readingTime}</h1>
      <h1 className="text-4xl">Bookmarked Blogs:{bookmarks.length}</h1>
      {
        bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}
