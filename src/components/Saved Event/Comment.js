import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../services/event.service"


const Comment = ({key, name, content,comment, eventId}) => {

  let history = useHistory();
  
  const deleteCommentsList = () => {
    deleteComment (name, content, comment._id)
    history.push('/calendar')
    window.location.reload()
  }
  console.log(comment)

  return (
    <>
      <div className="row g-0">
        <div className="col-3M">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" 
            className="img-thumbnail mb-1" 
            width="100%"
            style={{maxWidth: "100px"}}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-muted mb-0">{content}</p>
          </div>
        </div>
      </div>
      <footer className="nav justify-content-end">
        <Link
          to={{
          pathname: `/event/updatedcomment/${eventId}`
          }}
          className="btn btn-link"
        >
          <small >
          EDIT
          </small>
        </Link>
        <button className="btn btn-link" onClick={deleteCommentsList}>
        <small>
          DELETE
        </small>
        </button>
        <input type="hidden" value={key} />
      </footer> 
    </>
  )
}

export default Comment;
