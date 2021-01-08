import React from 'react'

const Comment = ({ key, name, content }) => {

  return (
    <>
      <div className="card">
        <h5 class="card-title">{name}</h5>
        <p className="card-text">{content}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        <input type="hidden" value={key} />
      </div>
    </>
  );
};

export default Comment;
