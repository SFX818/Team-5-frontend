import React from 'react'

const Comment = ({key, name, content}) => {
console.log(key)
    return (
        <>
        <div className="card">
        <h5 class="card-title">{name}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="btn btn-primary">{key}</a>
                
            <input type="hidden" value={key}/>
        </div>
        </>
    )
}
  
export default Comment;
  