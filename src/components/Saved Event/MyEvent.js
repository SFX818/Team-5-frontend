import React, { useState, useEffect } from 'react'
import { getAllComments } from '../../services/event.service'
import authHeader from '../../utilities/authHeader.utilities'
import axios from 'axios'
import ReactDOM from 'react-dom';

import { resMessage } from '../../utilities/functions.utilities'

const MyEvent = (params) => {

    const [message, setMessage] = useState('')
    const [event, setEvent] = useState('')
        
        useEffect( ()=>{
            axios.get(`http://localhost:8080/events/comments/5ff394c7d87802b5b25b5021`, { headers: authHeader() })
            .then(res=>{
                setEvent(res.data)
            },
            (error) => {
                return(error)
            }
        )},[])
        // see the event-state where the api set data to
        console.log(event)
       

    return (
      <div className="container">
        <p>Event: {event.name} </p>
        <p>date: {event.date} </p>
        <p>eventId: {event.eventId}</p>
        <p>location: {event.location}</p>
        __v: {event._v}/_id: {event._id}
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