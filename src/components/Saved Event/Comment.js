import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({key, name, content,comment, eventId}) => {
//console.log(eventId)
  return (
    <>
        <div className="row g-0">
          <div className="col-3M">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" className="img-thumbnail mb-1" width="100%"/>
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
              pathname: `/event/updatedcomment/${comment._id}`
              }}
            >
              <small>
              Edit
              </small>
            </Link>
            |
            <button onClick={Comment}>DELETE COMMENT</button>
            <input type="hidden" value={key} />
          </footer> 
        
      
    </>
  )
}

export default Comment;
