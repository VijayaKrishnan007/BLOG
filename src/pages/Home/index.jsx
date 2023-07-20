import React, { useState } from 'react'
import BlogHeader from './BlogHeader'
import SearchIndex from '../../pages/Home/Search/SearchIndex'
import BlogListIndex from './BlogList/BlogListIndex'
import { blogList } from '../../config/data'
import EmptyListIndex from '../../components/common/EmptyList/EmptyListIndex'

export const Index = () => {
    const [blogs, setBlogs] = useState(blogList);
    const [searchKey, setsearchKey] = useState('');

    const handleSearchSubmit = event => {
        event.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = () => {
        const allBlogs = blogList;
        const filteredBlogs = allBlogs.filter((blog) =>
        blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
      );

        setBlogs(filteredBlogs);
    }

    const handleClearSearch = () => {
        setBlogs(blogList);
        setsearchKey('');
    }
  return (
    <div>
        <BlogHeader/>
        <SearchIndex value={searchKey} formSubmit={handleSearchSubmit} clearSearch={handleClearSearch} handleSearchKey={e=>setsearchKey(e.target.value)}/>
        {/* <BlogListIndex blogs={blogList}/> */}
        {!blogs.length ? <EmptyListIndex /> : <BlogListIndex blogs={blogs} />}
    </div>
  )
}
export default Index