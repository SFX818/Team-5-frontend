import React from 'react'

const Comment = ({key, name, content}) => {

console.log(content)
    return (
      <div className="container">
          HELLO
        <h6>{name}</h6>
            <p>{content}</p>
            <p>ID {key}</p>
      </div>
    )
}
  
export default Comment;
  