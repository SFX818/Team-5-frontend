import React from "react";

const Comment = ({name,content}) => {

  return(
  <div className="col-sm-6">
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{content}</p>
        </div>
        </div>
    </div>
  ) 
  
};

export default Comment;

