import React, { useState, useEffect } from 'react'

const CommentsList = ({comments}) => {

    const [eventComments, setEventComments] = useState([''])

        
        useEffect( ()=>{
            setEventComments(comments)
            
        },[])
        //console.log(comments)
        console.log(eventComments)

    return (
      <div className="container">
        {/* <p>Name: {eventComments[0].name} </p>
        <p>Content: {eventComments[0].content} </p>
        <p>ID: {eventComments[0]._id}</p>     */}
      </div>
    );
};
  
  export default CommentsList;
  