import React, { useState } from 'react';
import ChipIndex from '../../../../components/common/ChipIndex';
import { Link } from 'react-router-dom';
import './BlogItem.css';
import data from '../../../../config/data'
import ConfirmModal from '../../../../components/ConfirmModal';
import { deletePost } from '../../../../redux';
import { useDispatch } from 'react-redux';



const BlogItemindex = ({blog:{id, description, title, createdAt, authorName, authorAvatar, category, cover}}) => {
 const [showModal, setShowModal] = useState(false);
 const [deleteRecord, setDeleteRecord] = useState(null);
 const [records, setRecords] = useState(data);
 const [like, setLike] = useState(0)
 const [dislike, setDislike] = useState(0);
 const [username, setUsername] = useState('');
 const [comments, setComments] = useState([]);
  const user = localStorage.getItem('username');
  const [newComment, setNewComment] = useState('');
 const dispatch = useDispatch();
 const handleDelete = (id) => {
  setShowModal(true);
  setDeleteRecord(id);
 }
 const handleDeleteConfirmation = () => {
  if(deleteRecord) {
    setRecords(records.filter((record) => record.id !==id));
    setDeleteRecord(null);
    setShowModal(false);
  }
 }

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  }
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if(newComment.trim() !== '') {
      const comment = {
        id: Date.now(),
        content: newComment.trim(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      console.log('Comment is',newComment);
      setComments([e.target.value]);
      console.log("comments..........",comments )
    }
  }

 
const handleCancel = () => {
  setDeleteRecord(null);
  setShowModal(false);
}
const onConfirmDelete = () => {
  dispatch(deletePost(id));

};

const handleLike = () => {
  setLike(like+1);
}

const handleDislike = () => {
  setDislike(dislike+1);
}

  return (
        <div className='blogItem-wrap'>
          {/* <button onClick={() => handleDelete(id)}>Delete</button> */}
          <ConfirmModal
              message="Are you sure want to delete ?"
              modalTitle={`Delete Post Id: ${id}`}
              leftButtonText="No"
              rightButtonText="Yes"
              confirmCallBackFun={onConfirmDelete}
            /> 
            <div className='row'>
                    <div className='col-sm-2'>
                    <button
                      className="button btn btn-warning"
                      data-bs-toggle="modal"
                      data-bs-target="#targetModal"
                    >
                      DELETE
                    </button>
                    </div>
                    </div>
          <img className='blogItem-cover' src={cover} alt='cover' />
          <ChipIndex label={category} />
          <h3>{title}</h3>
          <p className='blogItem-desc'>{description}</p>
          {showModal && (
            <div className='modal'>
              <h3>Delete Confirmation</h3>
              <p>Are you sure, you want to delete blog</p>
              <button onClick={handleDeleteConfirmation}>Yes</button>
              <button onClick={handleCancel}>No</button>
              </div>
          )}
          <footer>
            <div className='blogItem-author'>
              <img src={authorAvatar} alt='avatar' />
              <div>
                <h6>{authorName}</h6>
                <p>{createdAt}</p>
              </div>
            </div>
            <Link className='blogItem-link' to={`/blog/${id}`}>
              ➝
            </Link>
          </footer>
          <div className='row'>
          <div className='col-sm-4'>
            <span onClick={handleLike} className='tag'>
          <i class="fa fa-thumbs-up"></i>&nbsp;&nbsp;{like}
          </span>
        </div>
        <div className='col-sm-4'>
        <span onClick={handleDislike} className='tag'>
          <i class="fa fa-thumbs-down"></i>&nbsp;&nbsp;{dislike}
          </span>
        </div>
        <div className='col-sm-4'>
        <form onSubmit={handleCommentSubmit}>
          <input type="text" 
          value={newComment} 
          onChange={handleCommentChange}
          placeholder='Add a comment'/>
          </form>
        </div>
        </div>
        <div>
        {comments.map((comment) => (
          <div className='row'>
        <h6 key={comment.id}> {user} : &nbsp;&nbsp;{comment.content}</h6>
        </div>
      ))}
    </div>
        </div>
        

      );
    };

export default BlogItemindex