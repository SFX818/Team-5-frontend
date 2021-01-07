import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
// import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'
import { updateComment } from '../services/event.service'

const UpdateComment = () => {


    //axios call the fetches the comment to be edited and prepopulates it on the form

    const [savedComment, setSavedComment] = useState("")
    
    useEffect(() => {
        axios.get("http://localhost:8080/events/comments/5ff7351db5eaad3581e799d2", {headers: authHeader()}) 
          .then((res) => {
              console.log(res.data)
            setSavedComment(res.data)
          })
      }, [])


//   const initialState = { name: '', content: '' }
  const [comment, setComment] = useState("")

      console.log(comment)
  // axios call that edits the comment
  useEffect(() => {
    axios.put("http://localhost:8080/events/comments/5ff7351db5eaad3581e799d2", {headers: authHeader()}) 
      .then((res) => {
          console.log(res.data)
        setComment(res.data)
      })
  }, [])
 
  const handleSubmit = (e) => {
    e.preventDefault()
    updateComment(
       // body of the comment goes here
       
    )
}


// this function handles the update axios call and goes on the edit comment button on the comments component

  function handleUpdate(event) {
    setComment({...comment, [event.target.name]: event.target.value})
  }

// function that lets you cancel if you don't want to edit comment

//   function handleCancel() {
//     props.history.push("/comments/5ff394c7d87802b5b25b5021");
//   }

  return (
    <div>
      <h1>Edit Comment</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Content</label>
          <textarea name="content" rows="5" value={comment.content} onChange={handleUpdate} className="form-control" />
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick className="btn btn-secondary">handle Cancel goes here</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateComment