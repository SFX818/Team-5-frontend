import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {
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
            />
            ))}
            </div>
        </div>
      
        
      </>
    );
};
  
  export default CommentsList;
  