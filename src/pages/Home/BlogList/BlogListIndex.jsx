import React, { useState } from 'react'
import './BlogList.css'
import BlogItemindex from './BligItem/BlogItemindex'
import AddBlogIndex from '../AddBog/AddBlogIndex';
import ViewBlogIndex from '../AddBog/ViewBlogIndex';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const BlogListIndex = ({blogs}) => {
  const [userBlogs, setUserBlogs] = useState([]);
  const createBlog = (newBlog) => {
    const blog = {
      id: Date.now(),
      title: newBlog.get('title'),
      category: newBlog.get('category'),
      description: newBlog.get('description'),
      authorAvatar: newBlog.get('authorAvatar'),
      createdDate:newBlog.get('authorAvatar'),
      cover:newBlog.get('cover')
    };

    setUserBlogs([...blogs, blog]);
  };

  const deleteBlog = (id) => {
    setUserBlogs(blogs.filter((blog) => blog.id !== id));
  }

  return (
    <div className='blogList-wrap'>
        {blogs.map(blog => <BlogItemindex blog={blog} key={blog.id}/>)}
        {blogs.map((blog)=> {
          <ViewBlogIndex key={blog.id} blog={blog} deleteBlog={deleteBlog}/>
        })} 
        {/* <h3>userCreated Blogs</h3>
        <AddBlogIndex createBlog={createBlog} />

        {blogs.map((blog)=> {
          <ViewBlogIndex key={blog.id} blog={blog} deleteBlog={deleteBlog}/>
        })} */}
        {/* <AddBlogIndex createBlog={createBlog} /> */}
        <div>
    <Link to="/addBlog">
                    <button
                      className="button btn btn-primary"
                    >
                      AddBlog
                    </button>
                    </Link>
      </div>
    </div>
  )
}

export default BlogListIndex