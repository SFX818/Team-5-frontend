import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {

    return (
      <>
      {comments.map(comment=>(
          < Comment 
            key= {comment._id}    
            name= {comment.name} 
            content= {comment.content}         
          />
      ))}
        
      </>
    );
};
  
  export default CommentsList;
  