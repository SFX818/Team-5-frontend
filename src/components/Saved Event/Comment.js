import React from 'react'

const Comment = ({key, name, content}) => {

    return (
      <div className="container">
        <strong>{name}</strong>
            <p>{content}</p>
            <input type="hidden" value={key}/>
      </div>
    )
}
  
export default Comment;
  