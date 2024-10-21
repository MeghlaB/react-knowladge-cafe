import Bookmark from "../Bookmark/Bookmark";


export default function Bookmarks({bookmarks}) {
  return (
    <div className='w-1/3 border my-2 card bg-red-50 text-center rounded-lg p-4'>
      <h1 className="text-4xl">Bookmarked Blogs:{bookmarks.length}</h1>
      {
        bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }
    </div>
  )
}
