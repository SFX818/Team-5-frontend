import React from "react";
import Comment from './Comment'
import shortid from 'shortid'

const EventComments = ({comments}) => {

  return(
    <div className="col-sm-6">
        <div className="card">
            <div className="card-body">
            
                {comments.map((comment)=>
                    <EventComments 
                        id= {comment._id} 
                        name= {comment.name}
                        content= {comment.content} 
                    />
                )}
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
  ) 
  
};

export default EventComments;

