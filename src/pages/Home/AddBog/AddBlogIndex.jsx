import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './ViewStyles.css'

const AddBlogIndex = () => {
    // const [title,setTitle] = useState('');
    // const [category,setCategory] = useState('');
    // const [description,setDescription] = useState('');
    // const [authorName,SetAuthorName] = useState('');
    // const [authorAvatar,SetAuthorAvatar] = useState(null);
    // const [createdDate,setCreatedDate] = useState('');
    // const [cover,setCover] = useState(null);
    const history = useHistory();

    const [formData, setFormData] = useState({
        title:'',
        category:'',
        description:'',
        authorName:'',
        authorAvatar:null,
        createdDate:'',
        cover:null
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data is",formData)
        history.push('/usersBlog');
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

  return (
    <div>
        <Link className='blog-goBack' to='/usersBlog'>
          <span> &#8592;</span> <span>Go Back</span>
        </Link>
        <h2>Add New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input type="text" id='title' name="title" value={formData.title} onChange={handleChange}/>

            <label htmlFor='category'>Category</label>
            <input type="text" id='category' name="category" value={formData.category} onChange={handleChange}/>

            <label htmlFor='description'>Description</label>
            <input type="text" id='description' name="description" value={formData.description} onChange={handleChange}/>

            <label htmlFor='authorName'>Author Name </label>
            <input type="text" id='authorName' name="authorName" value={formData.authorName} onChange={handleChange}/>

            {/* <label htmlFor='avatar'>Avatar</label>
            <input type="file" id='avatar' accept="image/jpg,.gif,.png,.svg,.webp audio/wav,.mp3" value={authorAvatar} onChange={handleAuthorAvatar}/> */}

            <label htmlFor='date'>Date</label>
            <input type="date" id='date' name="createdDate" value={formData.createdDate} onChange={handleChange}/>

            {/* <label htmlFor='cover'>Cover</label>
            <input type="file" accept="image/jpg,.gif,.png,.svg,.webp audio/wav,.mp3"id='cover' value={cover} onChange={handleCover}/> */}
            <br></br>
            <br></br>
            <button className="button btn btn-primary" type="submit">ADD</button>

        </form>
    </div>
  )
}

export default AddBlogIndex