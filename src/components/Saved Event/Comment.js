import React from 'react'
import { Link } from 'react-router-dom'

const Comment = ({ key, name, content, comment }) => {
  console.log(key)
  return (
    <>
      <div className="card">
        <h5 class="card-title">{name}</h5>
        <p className="card-text">{content}</p>
        <Link
          to={{
            pathname: `/events/updatedcomment/${comment._id}`
          }}
        >
          Edit
                </Link>

        <input type="hidden" value={key} />
      </div>
    </>
  )
}

export default Comment;
