import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../services/event.service"


const Comment = ({key, name, content,comment, eventId}) => {
console.log(comment)

let history = useHistory();
  
  const deleteCommentsList = () => {
    deleteComment (name, content, comment._id)
    history.push('/calendar')
        window.location.reload()
    

  }
    return (
        <>
        <div className="card">
        <h5 class="card-title">{name}</h5>
                <p className="card-text">{content}</p>
                <Link
                    to={{
                    pathname: `/event/updatedcomment/${eventId}`,

                    }}

                >
                  Edit
                </Link>
                <button onClick={deleteCommentsList}>DELETE</button>

        <input type="hidden" value={key} />
      </div>
    </>
  )
}

export default Comment;
