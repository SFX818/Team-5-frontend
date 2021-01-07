import React, { useState, useEffect } from 'react'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

const MyEvent = (params) => {

    const [event, setEvent] = useState('')
    const [comments, setComments]= useState([])

    const eventId=(params.match.params.id)
        
        useEffect( ()=>{
            axios.get(`http://localhost:8080/events/comments/${eventId}`, { headers: authHeader() })
            .then(res=>{
                setEvent(res.data)
                setComments(res.data.comments)
            },
            (error) => {
                return(error)
            }
        )},[])

        const addComment = (newComment) =>{
            console.log('new comment: '+newComment)
            // e.preventDefault()
            setComments([ newComment, ...comments])
            
          }
        
       //console.log(comments)

    return (
      <div className="container">
        <p>Event: {event.name} </p>
        <p>date: {event.date} </p>
        <p>eventId: {event.eventId}</p>
        <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}
        
        < CommentsList 
            comments= {comments}
        />
        < CommentForm 
            addComment = {addComment}
        />
        <form>
  <label>
    Comments:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

        <button onClick={MyEvent}>DELETE COMMENT</button>
        
      </div>
    );
};




  
  export default MyEvent;