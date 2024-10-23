
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmark/Bookmarks'
import { useState } from 'react'
function App() {

const [bookmarks, setBookmarks] =useState([]);
const [readingTime, setTime] =useState(0);
const handleAddToBookMarks =(blog)=>{
  const newBookMark = [...bookmarks, blog];
  setBookmarks(newBookMark)
}
const handleReadingTime = (id,time) =>{
  const newread = readingTime + time;
  setTime(newread)
  // remove mark as read
  console.log('remove bookmark',id);
  const remaingBookmark = bookmarks.filter(bookmark => bookmark.id !== id );
  setBookmarks(remaingBookmark)

}
  return (
    <>
   
    <Header></Header>
          <div className='md:flex w-10/12 mx-auto p-4 m-4 gap-5'>
          <Blogs  handleAddToBookMarks={ handleAddToBookMarks} handleReadingTime ={handleReadingTime} ></Blogs>
          <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
          </div>
    </>
  )
}

export default App
