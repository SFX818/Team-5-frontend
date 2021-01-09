import React, { useState } from 'react'
import Comment from './Comment'
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../services/event.service"



const CommentsList = ({comments, eventId}) => {
  console.log(comments)
  

    return (
      <ul className="list-group list-group-flush">
      <div className="list-group-item list-group-item-info text-center">
          <h5 >Comments</h5>
      </div>
            {comments.map(comment=>(
              <li className="list-group-item">
              < Comment 
                key= {comment._id}    
                name= {comment.name} 
                content= {comment.content} 
                comment= {comment}
                eventId={eventId}        
              />
            </li>
            ))}
      </ul>
      
    );
};
  
  export default CommentsList;
  