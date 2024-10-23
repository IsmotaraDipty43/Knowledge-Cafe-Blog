import PropTypes from 'prop-types';

import { IoBookmarkSharp } from "react-icons/io5";


const Blog = ({blog, handleAddToBookMarks,handleReadingTime}) => {
    const {id,title , cover,reading_time,author_img,author,post_date,hashtag} = blog;
    return (
        <div className='space-y-4 mb-5'>
              < div className='rounded-lg '>
              <img src={cover} className='rounded-xl w-full' alt={`Cover picture of the ${title}`} />
              </div>
            <div className='flex justify-between'> 
<div className='flex gap-5'>
<img src={author_img} alt="" className='rounded-full h-14 w-14' /> 
<div>
    <h3 className='text-xl font-bold text-black'>{author}</h3>
    <p className='text-base font-semibold text-gray-400'>{post_date}</p>
</div>

</div>
<div className='flex justify-center items-center gap-2'>
<span>{reading_time} min read</span>
<button className='text-xl' onClick={()=> handleAddToBookMarks(blog)}><IoBookmarkSharp />
</button>
</div>
            </div>
<h2 className='text-4xl font-bold text-black'>{title}</h2>
<p>{
    hashtag.map((hash,inx) => <span key={inx} className='mr-4 font-semibold text-gray-400'><a href="">#{hash}</a></span>)}</p>
    <button className='text-purple-500 font-bold underline ' onClick={()=>handleReadingTime(id,reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookMarks :PropTypes.func,
    handleReadingTime: PropTypes.func
}


export default Blog;