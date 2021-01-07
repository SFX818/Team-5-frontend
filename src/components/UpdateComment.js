import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom'
import authHeader from '../utilities/authHeader.utilities'

const UpdateComment = () => {

  const initialState = { name: '', content: '' }
  const [comment, setComment] = useState(initialState)

  useEffect(() => {
    axios.put(`http://localhost:8080/events/comments/5ff394c7d87802b5b25b5021`, {headers: authHeader()}) 
      .then((res) => {
          console.log(res.data)
        setComment(res.data)
      })
  }, [])

//   function handleSubmit(event) {
//     event.preventDefault();
//     async function updateComment() {
//       try {
//         await patch("http://localhost:8080/events/comments/5ff394c7d87802b5b25b5021", commentt);
//         props.history.push(`/articles/${article._id}`);        
//       } catch(error) {
//         console.log(error);
//       }
//     }
//     updateArticle();
//   }

//   function handleChange(event) {
//     setArticle({...article, [event.target.name]: event.target.value})
//   }

//   function handleCancel() {
//     props.history.push(`/articles/${article._id}`);
//   }

//   return (
//     <div>
//       <h1>Edit {article.title}</h1>
//       <hr/>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Title</label>
//           <input type="text" name="title" value={article.title} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="form-group">
//           <label>Content</label>
//           <textarea name="content" rows="5" value={article.content} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="btn-group">
//           <button type="submit" className="btn btn-primary">Update</button>
//           <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
//         </div>
//       </form>
//     </div>
//   );
}

export default UpdateComment