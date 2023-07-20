import React from 'react'
import '../BlogList/BligItem/BlogItem.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import ChipIndex from '../../../components/common/ChipIndex';

const ViewBlogIndex = ({blog, deleteBlog}) => {

    const handleDelete = () => {
        deleteBlog(blog.id);
    }
  return (
    <div className='blog'>
        <img className='blogItem-cover' src={blog.cover} alt='blog.cover' />
        <ChipIndex label={blog.category} />
        <h2>{blog.title}</h2>
        <p className='blogItem-desc'>{blog.description}</p>
        <footer>
            <div className='blogItem-author'>
              <img src={blog.authorAvatar} alt='avatar' />
              <div>
                <h6>{blog.authorName}</h6>
                <p>{blog.createdDate}</p>
              </div>
            </div>
            {/* <Link className='blogItem-link' to={`/blog/${id}`}>
              ➝
            </Link> */}
            <button onClick={handleDelete}>Delete Blog</button>
          </footer>
    </div>
  )
}

export default ViewBlogIndex