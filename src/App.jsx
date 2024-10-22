
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmark/Bookmarks'
function App() {


  return (
    <>
   
    <Header></Header>
          <div className='md:flex w-10/12 mx-auto p-4 m-4'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
          </div>
    </>
  )
}

export default App
