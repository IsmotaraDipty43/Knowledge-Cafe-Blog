import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleAddToBookMarks,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('/blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3"> 
        {
                blogs.map(blog=> <Blog blog={blog} key={blog.id} handleReadingTime={handleReadingTime} handleAddToBookMarks ={ handleAddToBookMarks}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMarks : PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blogs;