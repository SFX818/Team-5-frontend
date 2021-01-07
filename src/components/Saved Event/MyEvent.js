import React, { useState, useEffect } from 'react'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'
import { resMessage } from '../../utilities/functions.utilities'
import CommentsList from './CommentsList'

const MyEvent = (params) => {

    const [message, setMessage] = useState('')
    const [event, setEvent] = useState('')

    const eventId=(params.match.params.id)
        
        useEffect( ()=>{
            axios.get(`http://localhost:8080/events/comments/${eventId}`, { headers: authHeader() })
            .then(res=>{
                setEvent(res.data)
            },
            (error) => {
                return(error)
            }
        )},[])
        // see the event-state where the api set data to
        console.log(event.comments)
       

    return (
      <div className="container">
        <p>Event: {event.name} </p>
        <p>date: {event.date} </p>
        <p>eventId: {event.eventId}</p>
        <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}
        < CommentsList 
            comments= {event.comments}
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