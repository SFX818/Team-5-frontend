import React, { useState } from 'react'
import Comment from './Comment'
import { useHistory } from "react-router-dom";
import { deleteComment } from "../../services/event.service"



const CommentsList = ({comments, eventId}) => {
  console.log(comments)
  

    return (
      <>
      <div class="card">
        <h5 class="card-header">Comments</h5>
            <div class="card-body">
              
            {comments.map(comment=>(
            < Comment 
                key= {comment._id}    
                name= {comment.name} 
                content= {comment.content} 
                comment= {comment}
                eventId={eventId}        
            />
            ))}
            </div>
        </div>
      </>
    );
};
  
  export default CommentsList;
  