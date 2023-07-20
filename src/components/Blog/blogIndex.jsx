import React, { useEffect, useState } from 'react'
import EmptyListIndex from '../common/EmptyList/EmptyListIndex';
import ChipIndex from '../common/ChipIndex';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { blogList } from '../../config/data';

const BlogIndex = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
  
    useEffect(() => {
      let blog = blogList.find((blog) => blog.id === parseInt(id));
      if (blog) {
        setBlog(blog);
      }
    }, []);
  
    return (
      <>
        <Link className='blog-goBack' to='/usersBlog'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        {blog ? (
          <div className='blog-wrap'>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1>{blog.title}</h1>
              <div className='blog-subCategory'>
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <ChipIndex label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt='cover' />
            <p className='blog-desc'>{blog.description}</p>
          </div>
        ) : (
          <EmptyListIndex />
        )}
      </>
    );
  };

export default BlogIndex