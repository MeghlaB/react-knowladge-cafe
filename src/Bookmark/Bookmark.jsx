
import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const{title} = bookmark
  return (
    <div className='border bg-red-100 rounded-lg p-6 m-3 text-2xl font-bold'>
        <h3>{title}</h3>
    </div>
  )
}

Bookmark.propTypes = {
    bookmarks:PropTypes.object.isRequired
}

export default Bookmark
