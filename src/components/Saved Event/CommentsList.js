import React, { useState, useEffect } from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {

    return (
      <div className="container">
        <h6>Comments:</h6>
        {comments.map((comment)=>{
        < Comment 
            key={comment._id}
            name= {comment.name}
            content={comment.content}
        />
        }) }
      </div>
    );
};
  
  export default CommentsList;
  